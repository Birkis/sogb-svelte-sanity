<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

	export let galleryData: {
		description?: string;
		images?: { image?: SanityImageSource; alt?: string; caption?: string }[];
	};
</script>

<div class="gallery-container my-8">
	{#if galleryData.description}<p>{galleryData.description}</p>{/if}
	{#each galleryData.images ?? [] as item}
		{#if item.image}
			<figure>
				<img
					src={urlFor(item.image).width(400).auto('format').url()}
					alt={item.alt || ''}
					loading="lazy"
				/>
				{#if item.caption}<figcaption>{item.caption}</figcaption>{/if}
			</figure>
		{/if}
	{/each}
</div>
