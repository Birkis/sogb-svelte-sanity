<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { SanityImageObject } from '@sanity/image-url/lib/types/types';
	import { urlFor } from '$lib/utils/image';

	type ImageBlock = Partial<SanityImageObject> & {
		_type: string;
		alt?: string;
		caption?: string;
	};
	let { portableText }: { portableText: CustomBlockComponentProps<ImageBlock> } = $props();
	let source = $derived.by(() => {
		if (!portableText.value.asset) return undefined;
		try {
			return urlFor(portableText.value).width(1200).auto('format').url();
		} catch {
			return undefined;
		}
	});
</script>

{#if source}
	{#if portableText.isInline}
		<img class="inline-image" src={source} alt={portableText.value.alt || ''} loading="lazy" />
	{:else}
		<figure>
			<img src={source} alt={portableText.value.alt || ''} loading="lazy" />
			{#if portableText.value.caption}<figcaption>{portableText.value.caption}</figcaption>{/if}
		</figure>
	{/if}
{/if}

<style>
	figure {
		margin: 2em 0;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
	.inline-image {
		display: inline-block;
		vertical-align: middle;
	}
	figcaption {
		margin-top: 12px;
		font-size: 13px;
		line-height: 1.6;
		color: var(--muted);
	}
</style>
