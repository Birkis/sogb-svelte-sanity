
import { getEmployees } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  try {
	// henter alle de objektene jeg trenger via getBlabla metoden
    const [employees] = await Promise.all([getEmployees()]);

    if (!employees) {
      throw error(404, 'Posts not found');
    }

	// sender de til +page.svelte for denne routen med props - De må dekonstrueres på frontend
    return {
     props: {
        employees
     }
    };
  } catch (err) {
    console.error(err);
    throw error(500, 'Internal server error');
  }
};
