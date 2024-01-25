<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import RichText from '../../../components/RichText.svelte';
	import type { RichTextBlock } from '$lib/utils/sanity';

	export let data: PageData;

	let blocks : RichTextBlock[] = data.body;


	
</script>

<section class="">
	{#if data.mainImage}
		<img
			class=" w-full max-h-[500px] object-cover"
			src={urlFor(data.mainImage).url()}
			alt={`Cover image for ${data.title}`}
		/>
	{:else}
		<div class=" " />
	{/if}
	<div class="mx-auto max-w-[80%] py-24">
		<h1 class="text-4xl font-bold">{data.title}</h1>
		<p class="text-sm text-gray-500 pb-4 pt-1">
			{formatDate(data._createdAt)}
		</p>
		<p class="text-lg mb-4 font-semibold">{data.excerpt}</p>

		<!-- Her bruker vi en selvdefinert customStyles til å sende inn egne variabler for egen styling -->
		<RichText {blocks} customStyles={{linkColor: 'text-red-500', width: 'w-[800px]'}} />	
	</div>





	
</section>
	


