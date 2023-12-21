import type { PageLoad } from './$types';
import type { BilXtra } from '$lib/utils/sanity';
import { getBilXtraIfo } from '$lib/utils/sanity';


export const load = (async () => {

        let data = await getBilXtraIfo();

        return data


}) satisfies PageLoad;