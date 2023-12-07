<script lang="ts">
	import Card from '../components/Card.svelte';
	import Card2 from '../components/Card2.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import Hero from '../components/Hero.svelte';
	import Stats from '../components/Stats.svelte';
	import Footer from '../components/Footer.svelte';
	import HighlightedPeople from '../components/HighlightedPeople.svelte';

	export let data: PageData;
	const { posts, banner } = data.props;

	console.log('Posts:', posts);
	console.log('Banner:', banner);
</script>
	
<Hero />


<!-- The first section of posts -->
<div class="w-full bg-slate-100 px-4 sm:px-8 md:px-20">
	<section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
		{#if posts.length}
			{#each posts as post}
				<div>
					<Card2 {post} />
				</div>
			{/each}
		{:else}
			<Welcome />
		{/if}
	</section>
</div>

<!-- Highlighted people -->
<HighlightedPeople />