import { getPosts, getBanner, getHero, getSalesTeam, getHomePage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  try {
	// henter alle de objektene jeg trenger via getBlabla metoden
    const [posts, banner, hero, salesTeam, homepage] = await Promise.all([getPosts(), getBanner(), getHero(), getSalesTeam(), getHomePage()]);

    // Check if required data exists (avoiding eval for Edge runtime compatibility)
    const dataToCheck = { posts, banner, hero, salesTeam };
    Object.entries(dataToCheck).forEach(([name, value]) => {
      if (!value) {
        throw error(404, `${name.charAt(0).toUpperCase() + name.slice(1)} not found`);
      }
    });

	// sender de til +page.svelte for denne routen med props - De må dekonstrueres på frontend
    return {
      props: {
        posts,
        banner,
        hero,
        salesTeam,
        homepage        
      },
    };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal server error');
  }
};
