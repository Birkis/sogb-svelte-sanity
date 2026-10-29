import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ setHeaders }) => {
	setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
	return {};
};
