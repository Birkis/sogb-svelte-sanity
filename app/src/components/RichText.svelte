<script lang="ts">
	import { PortableText, type InputValue } from '@portabletext/svelte';
	import RichTextEmail from './RichTextEmail.svelte';
	import RichTextImage from './RichTextImage.svelte';

	export let blocks: InputValue | null | undefined = [];
	export let customStyles: Record<string, string> = {};
</script>

<div class="rich-text {customStyles.width || ''}">
	<PortableText
		value={blocks ?? []}
		components={{ marks: { email: RichTextEmail }, types: { image: RichTextImage } }}
	/>
</div>

<style>
	.rich-text {
		color: var(--ink);
		font-size: 17px;
		line-height: 1.85;
		overflow-wrap: anywhere;
	}
	.rich-text :global(p) {
		margin: 0 0 1.4em;
	}
	.rich-text :global(h1),
	.rich-text :global(h2),
	.rich-text :global(h3),
	.rich-text :global(h4) {
		margin: 1.5em 0 0.5em;
		font-family: var(--font-display);
		font-weight: 800;
		line-height: 1.12;
		text-transform: uppercase;
	}
	.rich-text :global(h1),
	.rich-text :global(h2) {
		font-size: clamp(30px, 3.3vw, 44px);
	}
	.rich-text :global(h3) {
		font-size: 30px;
	}
	.rich-text :global(h4) {
		font-size: 24px;
	}
	.rich-text :global(a) {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 1px;
	}
	.rich-text :global(a:hover) {
		text-decoration-thickness: 2px;
	}
	.rich-text :global(strong) {
		font-weight: 700;
	}
	.rich-text :global(ul),
	.rich-text :global(ol) {
		margin: 0 0 1.5em;
		padding-left: 1.4em;
	}
	.rich-text :global(ul) {
		list-style: disc;
	}
	.rich-text :global(ol) {
		list-style: decimal;
	}
	.rich-text :global(li) {
		margin: 0.35em 0;
		padding-left: 0.3em;
	}
	.rich-text :global(li::marker) {
		color: var(--accent);
	}
	.rich-text :global(blockquote) {
		margin: 2em 0;
		padding: 8px 0 8px 28px;
		border-left: 3px solid var(--accent);
		font-size: 23px;
		font-weight: 600;
		line-height: 1.55;
	}
	.rich-text :global(> :first-child) {
		margin-top: 0;
	}
	.rich-text :global(> :last-child) {
		margin-bottom: 0;
	}
	@media (max-width: 600px) {
		.rich-text {
			font-size: 16px;
		}
	}
</style>
