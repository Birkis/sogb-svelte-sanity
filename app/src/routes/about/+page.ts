import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPostPage } from '$lib/utils/sanity';



export const load: PageLoad = async () => {

    const page = await getPostPage('about');
    if (page) {
        return {
            page
        };
    }

    throw error(404, 'Not found');
}