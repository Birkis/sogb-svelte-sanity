import type { PageServerLoad } from './$types';
import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getHomePage } from '$lib/server/sanity';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const homepage = await getHomePage();
	setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
	return { props: { homepage } };
};
