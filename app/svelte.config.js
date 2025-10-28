import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-vercel for optimized Vercel deployment with Node.js 22 support
		adapter: adapter({
			runtime: 'nodejs22.x',
			external: ['@sveltejs/kit']
		})
	}
};

export default config;
