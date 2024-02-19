<script lang="ts">
	import type { Post } from '$lib/utils/sanity.js';
    import { formatDate } from '$lib/utils';
    import { urlFor } from '$lib/utils/image';
    import RichText from '../../components/RichText.svelte';
	import type { RichTextBlock } from '$lib/utils/sanity';

	export let data;

    let post : Post = data.page;
    let debug = false;

    let blocks : RichTextBlock[] = post.body;

	let x: number;
	let y: number;

	if (post && post.mainImage && post.mainImage.hotspot) {
		x = post.mainImage.hotspot.x * 100;
		y = post.mainImage.hotspot.y * 100;
	}
	$: imagePosition = `object-fit: cover; object-position: ${x}% ${y}%;`;



</script>


{#if debug}
    <pre>{JSON.stringify(post, null, 2)}</pre>
{/if}



<section class="">
	{#if post.mainImage}
		<img
			class=" w-full object-scale-down py-4 "
			src={urlFor(post.mainImage).width(800).url()}
			alt={`Cover image for ${post.title}`}
			style={imagePosition}
		/>
	{:else}
		<div class=" " />
	{/if}
	<div class="mx-auto max-w-[80%] md:w-[480px] py-24">
		<h1 class="text-4xl font-bold">{post.title}</h1>
		<p class="text-sm text-gray-500 pb-4 pt-1">
			{formatDate(post._createdAt)}
		</p>
		{#if post.excerpt}
            <p class="text-lg mb-4 font-semibold">{post.excerpt}</p>
        {/if}

		<!-- Her bruker vi en selvdefinert customStyles til å sende inn egne variabler for egen styling -->
		<RichText {blocks} />	
	</div>





	
</section>



