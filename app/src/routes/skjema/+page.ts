import type { PageLoad } from './$types';
import { getForms } from '$lib/utils/sanity';

export const load = (async () => {

    const forms = await getForms();

    return {forms};
}) satisfies PageLoad;