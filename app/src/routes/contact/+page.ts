import type { PageLoad } from './$types';
import { getContactDetails } from '$lib/utils/sanity';

import { error } from '@sveltejs/kit';

export const load: PageLoad = (async () => {
    
    const data = await getContactDetails();


    if (!data) {
        throw error(404, 'Posts not found');
    }

    return {
        data
    };  


}) satisfies PageLoad;