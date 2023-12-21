<script lang="ts">
	import type { BilXtra, BlockContent } from '$lib/utils/sanity'
	import { urlFor } from '$lib/utils/image';

	export let data: BilXtra;

	console.log(data);
</script>


	<div class="container mx-auto px-4 py-8">
		<h1 class="text-4xl font-bold mb-4">{data.title}</h1>
		<p class="mb-4 font-semibold">{data.excerpt}</p>
		<div class="mb-8 h-[500px] relative">
			<img src={urlFor(data.mainImage).height(500).url()} alt={data.title} class="absolute inset-0 w-full h-full object-cover" />
		</div>
		<div>
			{#each data.body as block (block._key)}
				<p class={`${block.style} p-4`}>{block.children.map(child => child.text).join('')}</p>
			{/each}
		</div>
	</div>
