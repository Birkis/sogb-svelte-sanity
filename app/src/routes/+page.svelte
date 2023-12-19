<script lang="ts">
	import Card2 from '../components/Card2.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import Hero from '../components/Hero.svelte';
	import HighlightedPeople from '../components/HighlightedPeople.svelte';
	import Banner from '../components/Banner.svelte';

	export let data: PageData;
	const { posts, hero, banner, salesTeam } = data.props;

	
	console.log("The banner object is:", banner);



</script>
	
<Hero {hero} />



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


<!-- Banner -->
<Banner {banner}/>



<!-- Highlighted people -->
<HighlightedPeople {salesTeam}/>