import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost } from '$lib/utils/sanity';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	const post = await getPost(params.slug);
	
	if (post) {
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
