<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: forms = data.forms ?? [];
</script>

<svelte:head>
	<title>Skjema og dokumenter | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Finn og last ned skjemaer og dokumenter fra Sørensen og Balchen."
	/>
</svelte:head>

<section class="documents-page">
	<div class="site-container">
		<header class="page-heading">
			<p class="eyebrow">Kundeservice / Dokumenter</p>
			<h1 class="display-title">Skjema og<br />dokumenter.</h1>
			<p class="intro">
				Det praktiske, samlet på ett sted. Her finner du skjemaer og dokumenter fra Sørensen og
				Balchen.
			</p>
		</header>
		<div class="documents-layout">
			<div>
				{#if forms.length}
					<ul class="document-list">
						{#each forms as form (form._id)}
							<li class="document-row">
								<div>
									<h2>{form.title}</h2>
									{#if form.description}<p>{form.description}</p>{/if}
								</div>
								{#if form.file?.asset?.url}
									<a
										href={form.file.asset.url}
										download
										class="download-link"
										aria-label={`Last ned ${form.title}`}
									>
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 15v5h14v-5" /></svg
										>
										Last ned
									</a>
								{:else}
									<span class="unavailable">Kontakt oss for skjema</span>
								{/if}
							</li>
						{/each}
					</ul>
				{:else}
					<div class="empty-state">
						<h2>Trenger du et skjema?</h2>
						<p>Ta kontakt med kundesenteret, så hjelper vi deg med å finne riktig dokument.</p>
					</div>
				{/if}
				<a class="report-link" href="/Aapenhetsloven.pdf" download>
					<span
						><span class="eyebrow">Ansvarlig virksomhet</span><strong
							>Redegjørelse etter åpenhetsloven</strong
						></span
					><span aria-hidden="true">↓</span>
				</a>
			</div>
			<aside class="help-panel">
				<p class="eyebrow">Vi hjelper deg</p>
				<h2>Finner du ikke<br />det du leter etter?</h2>
				<p>Kundesenteret er tilgjengelig hverdager kl. 08–16.</p>
				<a class="phone" href="tel:+4722764444">+47 22 76 44 44</a>
				<a class="text-link" href="/contact">Kontakt oss <span aria-hidden="true">→</span></a>
			</aside>
		</div>
	</div>
</section>

<style>
	.documents-page {
		background: var(--paper);
		padding: 96px 0 120px;
	}
	.page-heading {
		max-width: 800px;
		margin-bottom: 72px;
	}
	h1 {
		font-size: clamp(56px, 6.8vw, 96px);
		line-height: 0.98;
		margin: 22px 0 28px;
	}
	.intro {
		max-width: 580px;
		font-size: 18px;
		line-height: 1.7;
		color: var(--muted);
	}
	.documents-layout {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 72px;
		align-items: start;
	}
	.document-list {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--line);
	}
	.document-row {
		display: flex;
		gap: 24px;
		justify-content: space-between;
		align-items: center;
		padding: 30px 0;
		border-bottom: 1px solid var(--line);
	}
	.document-row h2,
	.empty-state h2 {
		font-weight: 750;
		font-size: 21px;
		line-height: 1.3;
	}
	.document-row p,
	.empty-state p {
		margin-top: 10px;
		color: var(--muted);
		line-height: 1.7;
	}
	.download-link {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		font-weight: 700;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	.download-link:hover {
		color: var(--accent);
	}
	.download-link svg {
		width: 19px;
		height: 19px;
	}
	.unavailable {
		color: var(--muted);
		font-size: 13px;
		flex-shrink: 0;
	}
	.help-panel {
		padding: 36px;
		background: var(--ink);
		color: white;
	}
	.help-panel .eyebrow {
		color: #aab0b6;
	}
	.help-panel h2 {
		margin: 20px 0;
		font-family: var(--font-display);
		text-transform: uppercase;
		font-size: 36px;
		font-weight: 800;
		line-height: 1.05;
	}
	.help-panel > p:not(.eyebrow) {
		font-size: 15px;
		line-height: 1.7;
		color: #c9cccf;
	}
	.phone {
		display: block;
		margin: 24px 0 20px;
		font-size: 22px;
		font-weight: 750;
	}
	.report-link {
		display: flex;
		gap: 20px;
		justify-content: space-between;
		align-items: center;
		background: #e9e6df;
		padding: 28px;
		margin-top: 40px;
	}
	.report-link strong {
		display: block;
		margin-top: 12px;
		font-size: 17px;
	}
	.report-link > span:last-child {
		font-size: 28px;
	}
	.report-link:hover {
		background: #dfdcd4;
	}
	.empty-state {
		padding: 32px 0;
		border-top: 1px solid var(--line);
	}
	@media (max-width: 850px) {
		.documents-layout {
			grid-template-columns: 1fr;
			gap: 40px;
		}
	}
	@media (max-width: 600px) {
		.documents-page {
			padding: 60px 0 72px;
		}
		.page-heading {
			margin-bottom: 42px;
		}
		.document-row {
			align-items: flex-start;
			flex-direction: column;
			gap: 18px;
		}
		.help-panel {
			padding: 28px;
		}
	}
</style>
