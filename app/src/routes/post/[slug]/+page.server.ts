import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import { DEFAULT_CACHE_CONTROL } from '$lib/server/cache';
import { getPost } from '$lib/server/sanity';

export const load: PageServerLoad = async ({ params, setHeaders }) => {
	const post = await getPost(params.slug);

	if (post) {
		setHeaders({ 'cache-control': DEFAULT_CACHE_CONTROL });
		return {
			title: post.title,
			body: post.body,
			mainImage: post.mainImage,
			_createdAt: post._createdAt,
			excerpt: post.excerpt,
			pdfFile: post.pdfFile
		};
	}

	throw error(404, 'Not found');
};


