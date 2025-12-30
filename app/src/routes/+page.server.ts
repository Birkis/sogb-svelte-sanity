import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getBanner, getHero, getHomePage, getPosts, getSalesTeam } from '$lib/server/sanity';

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		setHeaders({
			'cache-control': DEFAULT_CACHE_CONTROL
		});

		// Keep behavior identical for now; we'll remove redundant fetches in the next todo.
		const [posts, banner, hero, salesTeam, homepage] = await Promise.all([
			getPosts(),
			getBanner(),
			getHero(),
			getSalesTeam(),
			getHomePage()
		]);

		const dataToCheck = { posts, banner, hero, salesTeam };
		Object.entries(dataToCheck).forEach(([name, value]) => {
			if (!value) {
				throw error(404, `${name.charAt(0).toUpperCase() + name.slice(1)} not found`);
			}
		});

		return {
			props: {
				posts,
				banner,
				hero,
				salesTeam,
				homepage
			}
		};
	} catch (err) {
		console.error(err);
		throw error(500, 'Internal server error');
	}
};


