<svelte:head>
	<title>Selskapsinformasjon | Sørensen og Balchen</title>
	<meta name="description" content="Selskapsinformasjon og kontakt for AS Sørensen og Balchen." />
</svelte:head>

<section class="company-page">
	<div class="site-container">
		<p class="eyebrow">Sørensen og Balchen / Selskapet</p>
		<h1 class="display-title">Bygget på<br />lang erfaring.</h1>
		<div class="company-grid">
			<div>
				<h2>Selskapsinformasjon</h2>
				<p class="intro">
					For spørsmål om selskapet og investorrelatert informasjon, ta kontakt med vårt
					sentralbord.
				</p>
				<a class="button button-primary" href="/contact"
					>Kontakt oss <span aria-hidden="true">→</span></a
				>
			</div>
			<dl>
				<div>
					<dt>Selskapsnavn</dt>
					<dd>AS Sørensen og Balchen</dd>
				</div>
				<div>
					<dt>Organisasjonsnummer</dt>
					<dd>916 591 144</dd>
				</div>
				<div>
					<dt>Kontoradresse</dt>
					<dd>Rosenholmveien 12, 1252 Oslo</dd>
				</div>
				<div>
					<dt>Sentralbord</dt>
					<dd><a href="tel:+4722764400">+47 22 76 44 00</a></dd>
				</div>
			</dl>
		</div>
		<a class="text-link about-link" href="/about"
			>Bli kjent med Sørensen og Balchen <span aria-hidden="true">→</span></a
		>
	</div>
</section>

<style>
	.company-page {
		padding: 100px 0 120px;
		background: var(--paper);
	}
	h1 {
		font-size: clamp(56px, 7vw, 100px);
		line-height: 0.98;
		margin: 24px 0 64px;
	}
	.company-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 100px;
	}
	h2 {
		font-size: 24px;
		font-weight: 750;
	}
	.intro {
		font-size: 20px;
		color: var(--muted);
		line-height: 1.7;
		margin: 22px 0 32px;
		max-width: 540px;
	}
	dl {
		margin: 0;
	}
	dl > div {
		padding: 22px 0;
		border-top: 1px solid var(--line);
	}
	dt {
		font-family: monospace;
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
		margin-bottom: 9px;
	}
	dd {
		font-size: 18px;
		font-weight: 650;
	}
	dd a:hover {
		color: var(--accent);
	}
	.about-link {
		display: inline-block;
		margin-top: 72px;
	}
	@media (max-width: 800px) {
		.company-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}
	@media (max-width: 600px) {
		.company-page {
			padding: 60px 0 72px;
		}
		h1 {
			margin-bottom: 40px;
		}
		.about-link {
			margin-top: 40px;
		}
	}
</style>
