<svelte:head>
	<title>Helse, miljø og sikkerhet | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Kontakt Sørensen og Balchen om helse, miljø, sikkerhet og produktdokumentasjon."
	/>
</svelte:head>

<section class="support-page">
	<div class="site-container">
		<p class="eyebrow">Ansvarlig virksomhet / HMS</p>
		<h1 class="display-title">Helse, miljø<br />og sikkerhet.</h1>
		<div class="support-grid">
			<div class="copy">
				<p class="lead">
					Har du spørsmål om HMS eller dokumentasjon for et produkt? Vi hjelper deg videre til
					riktig kontakt.
				</p>
				<p>
					Oppgi gjerne produktnavn og varenummer når du tar kontakt. Da er det enklere for oss å
					finne informasjonen du trenger.
				</p>
				<a class="button button-primary" href="/contact"
					>Kontakt kundesenteret <span aria-hidden="true">→</span></a
				>
			</div>
			<aside>
				<p class="eyebrow">Dokumentasjon</p>
				<h2>Informasjon<br />og åpenhet.</h2>
				<a class="resource" href="/skjema"
					>Skjema og dokumenter <span aria-hidden="true">↗</span></a
				>
				<a class="resource" href="/Aapenhetsloven.pdf" download
					>Åpenhetsloven (PDF) <span aria-hidden="true">↓</span></a
				>
			</aside>
		</div>
	</div>
</section>

<style>
	.support-page {
		padding: 100px 0 120px;
		background: var(--paper);
	}
	h1 {
		font-size: clamp(56px, 7vw, 100px);
		line-height: 0.98;
		margin: 24px 0 64px;
	}
	.support-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
		gap: 100px;
	}
	.support-grid > * {
		min-width: 0;
		overflow-wrap: anywhere;
	}
	.copy {
		max-width: 600px;
	}
	.copy p {
		color: var(--muted);
		line-height: 1.8;
		margin-bottom: 24px;
	}
	.copy .lead {
		font-size: 22px;
		line-height: 1.6;
		color: var(--ink);
	}
	.copy .button {
		margin-top: 16px;
		max-width: 100%;
	}
	aside {
		background: #e9e6df;
		padding: 40px;
	}
	h2 {
		font-family: var(--font-display);
		font-size: 38px;
		line-height: 1.05;
		font-weight: 800;
		text-transform: uppercase;
		margin: 20px 0 28px;
	}
	.resource {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		border-top: 1px solid #c9c5bd;
		padding: 20px 0;
		font-weight: 650;
	}
	.resource:hover {
		color: var(--accent);
	}
	@media (max-width: 850px) {
		.support-grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 40px;
		}
	}
	@media (max-width: 600px) {
		.support-page {
			padding: 60px 0 72px;
		}
		h1 {
			margin-bottom: 40px;
		}
		aside {
			padding: 28px;
		}
	}
</style>
