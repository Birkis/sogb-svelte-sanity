<svelte:head>
	<title>Vår virksomhet | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Bli kjent med virksomheten til Sørensen og Balchen og BilXtra-kjeden."
	/>
</svelte:head>

<section class="business-page">
	<div class="site-container">
		<p class="eyebrow">Sørensen og Balchen / Virksomhet</p>
		<h1 class="display-title">Sammen holder vi<br />Norge i bevegelse.</h1>
		<p class="intro">
			Fra distribusjon av bildeler til butikk og verksted. Bli kjent med virksomheten vår.
		</p>
		<div class="business-grid">
			<a class="business-card" href="/about"
				><span class="eyebrow">01 / Sørensen og Balchen</span>
				<h2>Erfaring som<br />driver oss frem.</h2>
				<p>
					Vi distribuerer slitedeler, rekvisita og tilbehør til verksteder og forhandlere over hele
					landet.
				</p>
				<span class="card-link">Les om selskapet <span aria-hidden="true">→</span></span></a
			>
			<a class="business-card dark" href="/bilxtra"
				><span class="eyebrow">02 / BilXtra</span>
				<h2>En del<br />av familien.</h2>
				<p>
					BilXtra samler butikker og verksteder med bilutstyr, reservedeler og tjenester for bilen
					din.
				</p>
				<span class="card-link">Bli kjent med BilXtra <span aria-hidden="true">→</span></span></a
			>
		</div>
		<a class="text-link" href="/contact"
			>Spørsmål om virksomheten vår? Kontakt oss <span aria-hidden="true">→</span></a
		>
	</div>
</section>

<style>
	.business-page {
		padding: 100px 0 120px;
		background: var(--paper);
	}
	h1 {
		font-size: clamp(52px, 6.8vw, 96px);
		line-height: 0.98;
		margin: 24px 0 28px;
	}
	.intro {
		max-width: 620px;
		font-size: 20px;
		line-height: 1.7;
		color: var(--muted);
	}
	.business-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 64px 0 48px;
		gap: 30px;
	}
	.business-card {
		padding: 48px;
		border: 1px solid var(--line);
		display: flex;
		flex-direction: column;
		background: white;
	}
	.business-card.dark {
		background: var(--ink);
		color: white;
		border-color: var(--ink);
	}
	h2 {
		font-family: var(--font-display);
		font-size: clamp(36px, 3.4vw, 48px);
		font-weight: 800;
		text-transform: uppercase;
		line-height: 1.05;
		margin: 28px 0 24px;
	}
	.business-card p {
		max-width: 440px;
		line-height: 1.8;
		color: var(--muted);
	}
	.dark p {
		color: #c9cccf;
	}
	.dark .eyebrow {
		color: #aab0b6;
	}
	.card-link {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		padding-top: 40px;
		margin-top: auto;
		font-weight: 700;
		font-size: 14px;
	}
	.card-link > span {
		color: var(--accent);
		font-size: 22px;
		transition: transform 0.2s;
	}
	.business-card:hover .card-link > span {
		transform: translateX(5px);
	}
	@media (max-width: 750px) {
		.business-grid {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
	@media (max-width: 600px) {
		.business-page {
			padding: 60px 0 72px;
		}
		.business-card {
			padding: 30px;
		}
		.business-grid {
			margin-top: 40px;
		}
	}
</style>
