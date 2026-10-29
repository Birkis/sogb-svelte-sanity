import type { PageServerLoad } from './$types';
import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getEmployees } from '$lib/server/sanity';
import { urlFor } from '$lib/utils/image';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface HomeEmployee {
	firstName: string;
	lastName: string;
	position: string;
	department: string;
	profilePicture?: SanityImageSource;
}

// These existing square assets include a name caption on the right. Frame the
// person for the homepage; replacement assets retain their own Sanity framing.
const captionedPortraits = new Set([
	'image-2e65b78deae1bb37bb3d1e0caa8b669378efa6c4-1200x1200-png',
	'image-6c36b304b2484de02d13402dcd65c9d0f2917d86-1200x1200-png',
	'image-5a60ad2c3b64decba0835f490e32d7b58bc811ee-1200x1200-png',
	'image-f9871dfdf96c0d09a10050b4da54e286690febbd-1200x1200-png'
]);

function portraitUrl(source: SanityImageSource | undefined) {
	if (!source) return null;
	const ref = (source as { asset?: { _ref?: string } }).asset?._ref;
	let image = urlFor(source);
	if (ref && captionedPortraits.has(ref)) image = image.rect(0, 80, 640, 800);
	return image.width(600).height(750).fit('crop').auto('format').url();
}

export const load: PageServerLoad = async ({ setHeaders }) => {
	const employees = (await getEmployees()) as unknown as HomeEmployee[];
	// Use the real people and portraits managed in Sanity, in the reference's role order.
	const roles = [
		/administrerende|\bceo\b/i,
		/økonomidirektør|\bcfo\b/i,
		/kjedesjef|kjededirektør/i,
		/digital leder/i
	];
	const leaders = roles
		.map((role) => employees.find((employee) => role.test(employee.position ?? '')))
		.filter((employee): employee is HomeEmployee => Boolean(employee))
		.map(({ firstName, lastName, position, profilePicture }) => ({
			firstName,
			lastName,
			position,
			portraitUrl: portraitUrl(profilePicture)
		}));
	setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
	return { props: { leaders } };
};
