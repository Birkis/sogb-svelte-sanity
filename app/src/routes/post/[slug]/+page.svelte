<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import RichText from '../../../components/RichText.svelte';
	import type { RichTextBlock } from '$lib/utils/sanity';

	export let data: PageData;

	let blocks : RichTextBlock[] = data.body;
	let debug = false;

	let x : number = data.mainImage.hotspot.x * 100;
	let y : number = data.mainImage.hotspot.y * 100;

	$: imagePosition = `object-fit: cover; object-position: ${x}% ${y}%;`;

	console.log(x,y);


	
</script>

{#if debug}	
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}

<section class="">
	{#if data.mainImage}
		<img
			class=" w-full h-[400px] object-cover"
			src={urlFor(data.mainImage).url()}
			alt={`Cover image for ${data.title}`}
			style={imagePosition}
		/>
	{:else}
		<div class=" " />
	{/if}
	<div class="mx-auto max-w-[80%] md:max-w-[480px] py-24">
		<h1 class="text-4xl font-bold">{data.title}</h1>
		<p class="text-sm text-gray-500 pb-4 pt-1">
			{formatDate(data._createdAt)}
		</p>
		{#if data.excerpt}
		<p class="text-lg mb-4 font-semibold">{data.excerpt}</p>
		{/if}

		<!-- Her bruker vi en selvdefinert customStyles til å sende inn egne variabler for egen styling -->
		<RichText {blocks} customStyles={{linkColor: 'text-red-500', width: 'w-1/2'}} />	
	</div>





	
</section>
	




