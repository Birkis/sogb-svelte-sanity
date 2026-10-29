<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	let { portableText, children }: { portableText: MarkComponentProps; children?: Snippet } =
		$props();
	let href = $derived.by(() => {
		const value = portableText.value;
		const target = value.email ?? value.emailAddress ?? value.href;
		if (typeof target !== 'string') return undefined;
		const address = target.replace(/^mailto:/i, '').trim();
		if (!/^[^\s<>@]+@[^\s<>@]+$/.test(address)) return undefined;
		return `mailto:${encodeURIComponent(address).replace(/%40/g, '@')}`;
	});
</script>

{#if href}
	<a {href}>{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
