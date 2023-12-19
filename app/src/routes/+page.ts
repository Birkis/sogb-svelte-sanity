import { getPosts, getBanner, getHero, getSalesTeam } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  try {
	// henter alle de objektene jeg trenger via getBlabla metoden
    const [posts, banner, hero, salesTeam] = await Promise.all([getPosts(), getBanner(), getHero(), getSalesTeam()]);

    ['posts', 'banner', 'hero','salesTeam'].forEach(item => {
      if (!eval(item)) {
        throw error(404, `${item.charAt(0).toUpperCase() + item.slice(1)} not found`);
      }
    });

	// sender de til +page.svelte for denne routen med props - De må dekonstrueres på frontend
    return {
      props: {
        posts,
        banner,
        hero,
        salesTeam
      },
    };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal server error');
  }
};
