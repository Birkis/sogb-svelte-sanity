import { getPosts, getBanner } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  try {
	// henter alle de objektene jeg trenger via getBlabla metoden
    const [posts, banner] = await Promise.all([getPosts(), getBanner()]);

    if (!posts) {
      throw error(404, 'Posts not found');
    }

    if (!banner) {
      throw error(404, 'Banner not found');
    }

	// sender de til +page.svelte for denne routen med props - De må dekonstrueres på frontend
    return {
      props: {
        posts,
        banner,
      },
    };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal server error');
  }
};
