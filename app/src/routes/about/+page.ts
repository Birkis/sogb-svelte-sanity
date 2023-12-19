import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPageContent } from '$lib/utils/sanity';



export const load: PageLoad = async () => {
    const pages = await getPageContent();
    if (pages && pages.length > 0) {
        return {
            props: {
                page: pages[0], // return the first page
            },
        };
    }

    throw error(404, 'Not found');
};