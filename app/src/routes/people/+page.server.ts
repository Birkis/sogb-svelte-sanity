import type { PageServerLoad } from './$types';
import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getEmployees } from '$lib/server/sanity';

export const load: PageServerLoad = async ({ setHeaders }) => {
	const employees = await getEmployees();
	setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
	return { props: { employees } };
};
