import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import type { PageServerLoad } from './$types';
import { getContactDetails } from '$lib/server/sanity';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (async ({ setHeaders }) => {
    
    const data = await getContactDetails();


    if (!data) {
        throw error(404, 'Posts not found');
    }

    setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
    return {
        data
    };  


}) satisfies PageServerLoad;