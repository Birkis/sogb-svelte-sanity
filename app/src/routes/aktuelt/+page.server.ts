import type { PageServerLoad } from './$types';
import type { Post } from '$lib/utils/sanity';
import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getHomePage } from '$lib/server/sanity';
import { urlFor } from '$lib/utils/image';

interface HomeContent {
	pageBuilderContent?: Array<{
		existingPostContent?: Post | null;
		selectedPosts?: Array<Post | null>;
	}>;
}

export const load: PageServerLoad = async ({ setHeaders }) => {
	const homepage: HomeContent[] = await getHomePage();
	const posts = new Map<string, Post>();

	for (const page of homepage ?? []) {
		for (const block of page.pageBuilderContent ?? []) {
			for (const post of [block.existingPostContent, ...(block.selectedPosts ?? [])]) {
				if (post?.slug?.current && !posts.has(post.slug.current)) {
					posts.set(post.slug.current, post);
				}
			}
		}
	}

	const articles = [...posts].map(([slug, post]) => ({
		slug,
		title: post.title || 'Fra Sørensen og Balchen',
		excerpt: post.excerpt,
		image: post.mainImage?.asset
			? urlFor(post.mainImage).width(960).height(600).fit('crop').auto('format').url()
			: null
	}));

	setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
	return { articles };
};
