<svelte:head>
	<title>Karriere | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Interessert i å jobbe hos Sørensen og Balchen? Bli kjent med oss og ta kontakt om jobbmuligheter."
	/>
</svelte:head>

<section class="career-hero">
	<div class="site-container">
		<p class="eyebrow">Karriere / Sørensen og Balchen</p>
		<h1 class="display-title">Bli med<br /><span>på laget.</span></h1>
		<p>Lager, salg, verksted eller digitalt. Det er menneskene som holder oss i bevegelse.</p>
		<a class="button button-primary" href="#muligheter"
			>Jobbmuligheter <span aria-hidden="true">↓</span></a
		>
	</div>
</section>
<section class="opportunities" id="muligheter">
	<div class="site-container career-grid">
		<div>
			<p class="eyebrow">Din neste jobb</p>
			<h2 class="display-title">Nysgjerrig<br />på mulighetene?</h2>
		</div>
		<div class="career-copy">
			<p>
				Vil du vite mer om å jobbe hos Sørensen og Balchen? Ta kontakt for informasjon om aktuelle
				muligheter og hvem du kan snakke med.
			</p>
			<p>
				Fortell gjerne litt om hva du er interessert i, enten det er logistikk, salg, butikk,
				verksted eller digitale tjenester.
			</p>
			<div class="actions">
				<a
					class="button button-dark"
					href="mailto:sogb@sogb.no?subject=Jobbmuligheter%20hos%20S%C3%B8rensen%20og%20Balchen"
					>Ta kontakt om jobb <span aria-hidden="true">→</span></a
				><a class="text-link" href="/people">Møt menneskene <span aria-hidden="true">→</span></a>
			</div>
		</div>
	</div>
</section>

<style>
	.career-hero {
		padding: 100px 0;
		background: var(--ink);
		color: white;
	}
	.career-hero .eyebrow {
		color: #aab0b6;
	}
	h1 {
		font-size: clamp(72px, 9vw, 132px);
		line-height: 0.96;
		margin: 24px 0 32px;
	}
	h1 span {
		color: var(--accent);
	}
	.career-hero .site-container > p:not(.eyebrow) {
		max-width: 520px;
		font-size: 20px;
		line-height: 1.6;
		color: #c9cccf;
		margin-bottom: 32px;
	}
	.opportunities {
		background: var(--paper);
		padding: 110px 0 120px;
		scroll-margin-top: 30px;
	}
	.career-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 100px;
	}
	h2 {
		font-size: clamp(40px, 4vw, 58px);
		line-height: 1.02;
		margin-top: 22px;
	}
	.career-copy p {
		font-size: 18px;
		line-height: 1.8;
		margin-bottom: 24px;
		color: var(--muted);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 24px;
		margin-top: 32px;
	}
	@media (max-width: 800px) {
		.career-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}
	}
	@media (max-width: 600px) {
		.career-hero {
			padding: 64px 0;
		}
		.opportunities {
			padding: 64px 0 72px;
		}
	}
</style>
