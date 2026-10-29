<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Post } from '$lib/utils/sanity';
	import RichText from './RichText.svelte';

	type EditorialPost = Pick<
		Post,
		'title' | 'excerpt' | 'body' | 'mainImage' | '_createdAt' | 'pdfFile'
	>;
	export let post: EditorialPost;
	export let variant: 'about' | 'bilxtra' | 'article' = 'article';

	$: eyebrow =
		variant === 'about'
			? '01 — Om oss'
			: variant === 'bilxtra'
				? '03 — Vår kjede'
				: 'Sørensen og Balchen — Aktuelt';
	$: imageUrl = post.mainImage?.asset
		? urlFor(post.mainImage).width(1600).auto('format').url()
		: null;
	$: imagePosition = `${(post.mainImage?.hotspot?.x ?? 0.5) * 100}% ${(post.mainImage?.hotspot?.y ?? 0.5) * 100}%`;
	$: publishedDate = post._createdAt
		? new Intl.DateTimeFormat('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' }).format(
				new Date(post._createdAt)
			)
		: '';
</script>

<svelte:head>
	<title>{post.title || 'Sørensen og Balchen'} | Sørensen og Balchen</title>
	{#if post.excerpt}<meta name="description" content={post.excerpt} />{/if}
</svelte:head>

<article class="editorial-page">
	<header class="editorial-header">
		<div class="site-container">
			<a class="back-link" href={variant === 'article' ? '/aktuelt' : '/'}
				>← {variant === 'article' ? 'Til aktuelt' : 'Til forsiden'}</a
			>
			<p class="eyebrow">{eyebrow}</p>
			<h1 class="display-title">{post.title || (variant === 'bilxtra' ? 'BilXtra' : 'Om oss')}</h1>
			{#if post.excerpt}<p class="editorial-intro">{post.excerpt}</p>{/if}
			{#if variant === 'article' && publishedDate}
				<time class="published-date" datetime={post._createdAt}>{publishedDate}</time>
			{/if}
		</div>
	</header>

	{#if imageUrl}
		<div class="site-container editorial-image" class:brand-image={variant === 'bilxtra'}>
			<img
				src={imageUrl}
				alt={post.title || 'Sørensen og Balchen'}
				style:object-position={imagePosition}
				fetchpriority="high"
			/>
		</div>
	{/if}

	<div class="site-container editorial-content">
		<aside class="editorial-aside">
			{#if variant === 'about'}
				<p class="eyebrow">Erfaring som driver oss</p>
				<p class="aside-heading">Siden 1904.</p>
				<p>
					Folk, fagkunnskap og bildeler. Bli bedre kjent med menneskene bak Sørensen og Balchen.
				</p>
				<a class="text-link" href="/people">Møt våre ansatte <span aria-hidden="true">→</span></a>
			{:else if variant === 'bilxtra'}
				<p class="eyebrow">En del av familien</p>
				<img class="brand-logo" src="/bilXtra_logo.png" alt="BilXtra" width="457" height="89" />
				<p>Bildeler, bilutstyr og verksteder. Finn det du trenger hos BilXtra.</p>
				<a
					class="button button-primary"
					href="https://bilxtra.no/"
					target="_blank"
					rel="noopener noreferrer">Besøk bilxtra.no <span aria-hidden="true">↗</span></a
				>
				<a class="text-link" href="/contact"
					>Bli BilXtra-forhandler <span aria-hidden="true">→</span></a
				>
			{:else}
				<p class="eyebrow">Sørensen og Balchen</p>
				<p class="aside-heading">Vi hjelper deg.</p>
				<p>Har du spørsmål? Ta kontakt med oss, så hjelper vi deg videre.</p>
				<a class="text-link" href="/contact">Kontakt oss <span aria-hidden="true">→</span></a>
			{/if}
			{#if post.pdfFile?.asset?.url}
				<a
					class="button button-outline pdf-link"
					href={post.pdfFile.asset.url}
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5" /></svg
					>
					Last ned PDF
				</a>
			{/if}
		</aside>
		<div class="editorial-body"><RichText blocks={post.body ?? []} /></div>
	</div>

	{#if variant !== 'article'}
		<section class="editorial-next">
			<div class="site-container next-inner">
				<div>
					<p class="eyebrow">Sammen holder vi Norge i bevegelse</p>
					<h2 class="display-title">La oss ta en prat.</h2>
				</div>
				<a class="button button-primary" href="/contact"
					>Kontakt oss <span aria-hidden="true">→</span></a
				>
			</div>
		</section>
	{/if}
</article>

<style>
	.editorial-page {
		background: var(--paper);
	}
	.editorial-header {
		padding: 42px 0 74px;
	}
	.back-link {
		display: inline-block;
		color: var(--muted);
		font-size: 13px;
		margin-bottom: 64px;
	}
	.back-link:hover {
		color: var(--accent);
	}
	.editorial-header .eyebrow {
		margin-bottom: 22px;
	}
	.editorial-header h1 {
		font-size: clamp(56px, 7.5vw, 104px);
		max-width: 1060px;
		line-height: 1.02;
		margin: 0;
		overflow-wrap: anywhere;
	}
	.editorial-intro {
		font-size: clamp(18px, 1.7vw, 23px);
		line-height: 1.65;
		max-width: 820px;
		margin-top: 28px;
		color: #41464b;
	}
	.published-date {
		display: block;
		margin-top: 26px;
		font-family: monospace;
		font-size: 12px;
		letter-spacing: 0.04em;
		color: var(--muted);
	}
	.editorial-image {
		height: clamp(280px, 37vw, 510px);
		background: #e8e5df;
		overflow: hidden;
	}
	.editorial-image img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.brand-image {
		background: white;
		height: 330px;
		padding: 64px;
	}
	.brand-image img {
		object-fit: contain;
	}
	.editorial-content {
		display: grid;
		grid-template-columns: minmax(200px, 0.75fr) minmax(0, 2fr);
		gap: clamp(60px, 9vw, 144px);
		padding-top: 90px;
		padding-bottom: 120px;
	}
	.editorial-aside {
		border-top: 2px solid var(--accent);
		padding-top: 26px;
		align-self: start;
	}
	.editorial-aside .eyebrow {
		line-height: 1.7;
	}
	.aside-heading {
		font-family: var(--font-display);
		font-size: 36px;
		font-weight: 800;
		line-height: 1.1;
		text-transform: uppercase;
		margin-top: 18px;
	}
	.editorial-aside > p:not(.eyebrow):not(.aside-heading) {
		font-size: 14px;
		line-height: 1.75;
		color: var(--muted);
		margin: 18px 0 24px;
	}
	.editorial-aside .text-link {
		display: inline-block;
		font-size: 14px;
	}
	.editorial-aside .button + .text-link {
		margin-top: 24px;
	}
	.brand-logo {
		display: block;
		width: 220px;
		max-width: 100%;
		height: auto;
		margin-top: 24px;
	}
	.pdf-link {
		margin-top: 32px;
	}
	.editorial-body {
		max-width: 790px;
	}
	.editorial-next {
		padding: 64px 0;
		border-top: 1px solid var(--line);
		background: #eae7e1;
	}
	.next-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}
	.next-inner h2 {
		font-size: clamp(38px, 4vw, 58px);
		margin-top: 14px;
	}
	@media (max-width: 900px) {
		.editorial-content {
			gap: 48px;
			grid-template-columns: minmax(160px, 0.7fr) minmax(0, 1.5fr);
		}
	}
	@media (max-width: 650px) {
		.editorial-header {
			padding-top: 28px;
			padding-bottom: 44px;
		}
		.back-link {
			margin-bottom: 42px;
		}
		.editorial-header h1 {
			font-size: clamp(48px, 12vw, 72px);
		}
		.editorial-intro {
			font-size: 17px;
			margin-top: 22px;
		}
		.editorial-image {
			height: 260px;
		}
		.brand-image {
			height: 200px;
			padding: 32px;
		}
		.editorial-content {
			display: flex;
			flex-direction: column;
			gap: 48px;
			padding-top: 48px;
			padding-bottom: 64px;
		}
		.editorial-body {
			order: -1;
		}
		.editorial-aside {
			width: 100%;
		}
		.next-inner {
			align-items: flex-start;
			flex-direction: column;
		}
		.editorial-next {
			padding: 46px 0;
		}
	}
</style>
