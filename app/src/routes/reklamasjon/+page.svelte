<svelte:head>
	<title>Reklamasjon | Sørensen og Balchen</title>
	<meta
		name="description"
		content="Ta kontakt med kundesenteret for hjelp med reklamasjon og finn relevante skjemaer."
	/>
</svelte:head>

<section class="support-page">
	<div class="site-container">
		<p class="eyebrow">Kundeservice / Reklamasjon</p>
		<h1 class="display-title">La oss<br />hjelpe deg.</h1>
		<div class="support-grid">
			<div class="copy">
				<h2>Reklamasjon</h2>
				<p class="lead">
					Er det noe som ikke er som det skal? Kontakt kundesenteret for veiledning om saken din.
				</p>
				<p>
					Ha gjerne varenummer, kjøpsdokumentasjon og en kort beskrivelse tilgjengelig. Bilder kan
					være nyttige for å forklare hva som har skjedd.
				</p>
				<div class="actions">
					<a class="button button-primary" href="mailto:sogb@sogb.no?subject=Reklamasjon"
						>Send en henvendelse <span aria-hidden="true">→</span></a
					><a class="text-link" href="/skjema">Finn skjema <span aria-hidden="true">→</span></a>
				</div>
			</div>
			<aside>
				<p class="eyebrow">Kundesenter</p>
				<a class="phone" href="tel:+4722764444">+47 22 76 44 44</a>
				<p>Hverdager 08:00–16:00</p>
				<a class="email" href="mailto:sogb@sogb.no">sogb@sogb.no</a>
				<div class="aside-note">
					Har du handlet i en BilXtra-butikk? Ta gjerne kontakt med butikken der du kjøpte varen.
				</div>
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
		grid-template-columns: 1.2fr 1fr;
		gap: 100px;
		align-items: start;
	}
	h2 {
		font-size: 24px;
		font-weight: 750;
		margin-bottom: 20px;
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
	.actions {
		display: flex;
		align-items: center;
		gap: 24px;
		flex-wrap: wrap;
		margin-top: 32px;
	}
	aside {
		background: var(--ink);
		color: white;
		padding: 40px;
	}
	aside .eyebrow {
		color: #aab0b6;
	}
	.phone {
		display: block;
		font-size: clamp(26px, 3vw, 40px);
		font-weight: 800;
		letter-spacing: -1px;
		margin: 22px 0 12px;
	}
	aside > p:not(.eyebrow) {
		font-size: 14px;
		color: #c9cccf;
	}
	.email {
		display: inline-block;
		text-decoration: underline;
		text-underline-offset: 4px;
		margin-top: 14px;
	}
	.aside-note {
		margin-top: 30px;
		padding-top: 24px;
		border-top: 1px solid #34393e;
		color: #c9cccf;
		font-size: 14px;
		line-height: 1.7;
	}
	@media (max-width: 850px) {
		.support-grid {
			grid-template-columns: 1fr;
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
