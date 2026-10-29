<svelte:head>
	<title>Personvern og kontakt | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Kontaktinformasjon for spørsmål om personvern hos AS Sørensen og Balchen."
	/>
</svelte:head>

<section class="privacy-page">
	<div class="site-container">
		<p class="eyebrow">Sørensen og Balchen / Personvern</p>
		<h1 class="display-title">Spørsmål<br />om personvern?</h1>
		<div class="privacy-grid">
			<div class="copy">
				<p class="lead">
					Ta kontakt med AS Sørensen og Balchen hvis du har spørsmål om personopplysninger eller
					ønsker informasjon om hvordan en henvendelse blir håndtert.
				</p>
				<p>
					Beskriv kort hva spørsmålet gjelder, slik at vi kan hjelpe deg videre til riktig kontakt.
					Unngå å sende sensitive opplysninger i en vanlig e-post.
				</p>
				<a
					class="button button-primary"
					href="mailto:sogb@sogb.no?subject=Sp%C3%B8rsm%C3%A5l%20om%20personvern"
					>Kontakt oss om personvern <span aria-hidden="true">→</span></a
				>
			</div>
			<aside>
				<p class="eyebrow">Kontaktinformasjon</p>
				<h2>AS Sørensen og Balchen</h2>
				<p>Org.nr. 916 591 144</p>
				<address>Rosenholmveien 12<br />1252 Oslo</address>
				<a href="mailto:sogb@sogb.no">sogb@sogb.no</a><a href="tel:+4722764400">+47 22 76 44 00</a>
			</aside>
		</div>
	</div>
</section>

<style>
	.privacy-page {
		padding: 100px 0 120px;
		background: var(--paper);
	}
	h1 {
		font-size: clamp(52px, 7vw, 96px);
		line-height: 0.98;
		margin: 24px 0 64px;
	}
	.privacy-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 100px;
		align-items: start;
	}
	.copy p {
		color: var(--muted);
		line-height: 1.8;
		margin-bottom: 24px;
	}
	.copy .lead {
		font-size: 21px;
		line-height: 1.65;
		color: var(--ink);
	}
	.copy .button {
		margin-top: 16px;
	}
	aside {
		border-top: 2px solid var(--ink);
		padding-top: 28px;
	}
	h2 {
		font-size: 22px;
		font-weight: 750;
		margin: 22px 0 8px;
	}
	aside > p:not(.eyebrow) {
		color: var(--muted);
		font-size: 14px;
	}
	address {
		font-style: normal;
		line-height: 1.8;
		margin: 24px 0;
	}
	aside a {
		display: block;
		margin-top: 10px;
		text-decoration: underline;
		text-underline-offset: 4px;
	}
	aside a:hover {
		color: var(--accent);
	}
	@media (max-width: 800px) {
		.privacy-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}
	@media (max-width: 600px) {
		.privacy-page {
			padding: 60px 0 72px;
		}
		h1 {
			margin-bottom: 40px;
		}
	}
</style>
