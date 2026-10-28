import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import type { PageServerLoad } from './$types';
import { getForms } from '$lib/server/sanity';

export const load = (async ({ setHeaders }) => {

    const forms = await getForms();

    setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
    return {forms};
}) satisfies PageServerLoad;