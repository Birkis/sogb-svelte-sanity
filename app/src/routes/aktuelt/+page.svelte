<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Aktuelt | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Nyheter, historier og nyttig informasjon fra Sørensen og Balchen."
	/>
</svelte:head>

<section class="news-page">
	<div class="site-container">
		<header class="news-heading">
			<p class="eyebrow">Sørensen og Balchen / Aktuelt</p>
			<h1 class="display-title">Det skjer<br />hos oss.</h1>
			<p class="intro">Nyheter, historier og nyttig informasjon fra Sørensen og Balchen.</p>
		</header>

		{#if data.articles.length}
			<div class="article-grid">
				{#each data.articles as article (article.slug)}
					<article>
						<a class="article-link" href={`/post/${encodeURIComponent(article.slug)}`}>
							{#if article.image}
								<div class="article-image">
									<img src={article.image} alt="" width="960" height="600" loading="lazy" />
								</div>
							{:else}
								<div class="article-placeholder" aria-hidden="true">
									<span>Sørensen<br />og Balchen.</span>
								</div>
							{/if}
							<div class="article-copy">
								<h2>{article.title}</h2>
								{#if article.excerpt}<p>{article.excerpt}</p>{/if}
								<span class="read-more">Les mer <span aria-hidden="true">→</span></span>
							</div>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-state">
				<h2>Mer fra Sørensen og Balchen</h2>
				<p>
					Det er ingen artikler å vise akkurat nå. I mellomtiden kan du bli bedre kjent med oss og
					menneskene bak.
				</p>
				<a class="button button-dark" href="/about">Les om oss <span aria-hidden="true">→</span></a>
			</div>
		{/if}
	</div>
</section>

<style>
	.news-page {
		background: var(--paper);
		padding: 96px 0 120px;
	}
	.news-heading {
		margin-bottom: 72px;
	}
	h1 {
		font-size: clamp(64px, 7vw, 100px);
		line-height: 0.98;
		margin: 24px 0 28px;
	}
	.intro {
		max-width: 560px;
		font-size: 20px;
		color: var(--muted);
		line-height: 1.65;
	}
	.article-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 56px 32px;
	}
	article {
		min-width: 0;
	}
	.article-link {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.article-image,
	.article-placeholder {
		aspect-ratio: 8 / 5;
		overflow: hidden;
	}
	.article-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}
	.article-link:hover img {
		transform: scale(1.025);
	}
	.article-placeholder {
		display: flex;
		align-items: end;
		padding: 32px;
		background: var(--ink);
		color: white;
	}
	.article-placeholder span {
		font-family: var(--font-display);
		font-size: clamp(30px, 3vw, 42px);
		text-transform: uppercase;
		font-weight: 900;
		line-height: 1;
	}
	.article-copy {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 28px 0 24px;
		border-bottom: 1px solid var(--line);
	}
	h2 {
		font-family: var(--font-display);
		overflow-wrap: anywhere;
		font-size: 36px;
		font-weight: 900;
		text-transform: uppercase;
		line-height: 1.05;
	}
	.article-copy p {
		color: var(--muted);
		font-size: 16px;
		line-height: 1.7;
		margin-top: 18px;
	}
	.read-more {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding-top: 28px;
		margin-top: auto;
		font-size: 14px;
		font-weight: 700;
	}
	.read-more > span {
		color: var(--accent);
		font-size: 24px;
		transition: transform 0.2s ease;
	}
	.article-link:hover .read-more > span {
		transform: translateX(5px);
	}
	.article-link:hover h2 {
		color: var(--accent);
	}
	.empty-state {
		max-width: 700px;
		border-top: 1px solid var(--line);
		padding: 40px 0;
	}
	.empty-state p {
		font-size: 18px;
		line-height: 1.7;
		color: var(--muted);
		margin: 24px 0 32px;
	}
	@media (max-width: 1000px) {
		.article-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 600px) {
		.news-page {
			padding: 60px 0 72px;
		}
		.news-heading {
			margin-bottom: 44px;
		}
		.article-grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 40px;
		}
		.article-copy {
			padding-top: 24px;
		}
	}
</style>
