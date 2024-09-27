<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';
	import RichText from '../../../components/RichText.svelte';
	import type { RichTextBlock } from '$lib/utils/sanity';

	export let data: PageData;

	let blocks : RichTextBlock[] = data.body;
	let debug = false;

	let x : number = 50;
	let y : number = 50;

	$: if (data.mainImage?.hotspot) {
		x = data.mainImage.hotspot.x * 100;
		y = data.mainImage.hotspot.y * 100;
	}

	$: imagePosition = `object-fit: cover; object-position: ${x}% ${y}%;`;

	// Add this function to handle PDF download
	function downloadPDF() {
		if (data.pdfFile && data.pdfFile.asset && data.pdfFile.asset.url) {
			window.open(data.pdfFile.asset.url, '_blank');
		}
	}
</script>

{#if debug}	
	<pre>{JSON.stringify(data, null, 2)}</pre>
{/if}

<section class="">
	{#if data.mainImage}
		<img
			class=" w-full h-[400px] object-cover"
			src={urlFor(data.mainImage.asset).url()}
			alt={`Cover image for ${data.title}`}
			style={imagePosition}
		/>
	{:else}
		<div class=" " />
	{/if}
	<div class="mx-auto max-w-[80%] md:max-w-[640px] py-24">
		<div class="flex items-start gap-4">
			<!-- PDF download button on the left -->
			{#if data.pdfFile && data.pdfFile.asset}
				<button
					class="flex-shrink-0 border border-black text-black font-bold py-4 px-4 rounded-sm hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
					on:click={downloadPDF}
				>
					LAST NED PDF
				</button>
			{/if}
			
			<div class="flex-grow">
				<h1 class="text-4xl font-bold">{data.title}</h1>
				<p class="text-sm text-gray-500 pb-4 pt-1">
					{formatDate(data._createdAt)}
				</p>
				{#if data.excerpt}
					<p class="text-lg mb-4 font-semibold">{data.excerpt}</p>
				{/if}
				
				<!-- Her bruker vi en selvdefinert customStyles til å sende inn egne variabler for egen styling -->
				<RichText {blocks} customStyles={{linkColor: 'text-red-500', width: 'w-full'}} />
			</div>
		</div>
	</div>
</section>

