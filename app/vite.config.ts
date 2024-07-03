import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
		  allow: [
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/static',
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/src/lib',
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/src/routes',
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/.svelte-kit',
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/src',
			'/Users/michaelbirkeland/dev/sogb/sogb-svelte-sanity/app/node_modules'
		  ]
		}
	  }
});
