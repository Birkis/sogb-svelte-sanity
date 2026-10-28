import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostPage } from '$lib/server/sanity';



export const load: PageServerLoad = async ({ setHeaders }) => {

    const page = await getPostPage('bilxtra');
    if (page) {
        setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
        return {
            page
        };
    }

    throw error(404, 'Not found');
}