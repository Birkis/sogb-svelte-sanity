<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
	import type { PageData } from './$types';

	export let data: PageData;


	console.log('Data:', data.body);
	
</script>

<section class="post">
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
		<p class="text-sm text-gray-500 pb-4">
			{formatDate(data._createdAt)}
		</p>
		<p class="text-lg mb-4">{data.excerpt}</p>
		<div class="prose">
			<PortableText value={data.body} />
		</div>
	</div>
</section>
