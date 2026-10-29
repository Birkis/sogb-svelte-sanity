<script lang="ts">
	import { contactInfo } from '$lib/contactInfo';
</script>

<svelte:head>
	<title>Kontakt oss — Sørensen og Balchen</title>
	<meta
		name="description"
		content="Kontakt Sørensen og Balchen. Finn telefonnummer, e-post, åpningstider og veien til oss i Rosenholmveien 12 i Oslo."
	/>
</svelte:head>

<section class="contact-intro">
	<div class="site-container intro-grid">
		<div>
			<p class="eyebrow">Kontakt oss</p>
			<h1 class="display-title">Vi hjelper<br />deg videre.</h1>
		</div>
		<p>
			Spørsmål om deler, levering eller samarbeid? Ta kontakt med oss — vi finner veien videre
			sammen.
		</p>
	</div>
</section>

<section class="contact-details" aria-label="Kontaktinformasjon">
	<div class="site-container">
		<div class="contact-grid">
			<section class="contact-card primary-card">
				<p class="eyebrow">01 — Kundesenter</p>
				<h2>Deler og bestilling</h2>
				<p>Vi hjelper verksteder og forhandlere med deler, bestillinger og levering.</p>
				<a class="phone-number" href="tel:{contactInfo.contactOrders.Telefon.replace(/\s/g, '')}"
					>{contactInfo.contactOrders.Telefon}</a
				>
				<a class="email" href="mailto:{contactInfo.contactOrders.Epost}"
					>{contactInfo.contactOrders.Epost}</a
				>
			</section>
			<section class="contact-card">
				<p class="eyebrow">02 — Sentralbord</p>
				<h2>Kontor og administrasjon</h2>
				<p>For generelle henvendelser og kontakt med administrasjonen.</p>
				<a class="phone-number" href="tel:{contactInfo.contactOffice.Telefon.replace(/\s/g, '')}"
					>{contactInfo.contactOffice.Telefon}</a
				>
				<a class="email" href="mailto:{contactInfo.contactOffice.Epost}"
					>{contactInfo.contactOffice.Epost}</a
				>
			</section>
			<section class="contact-card">
				<p class="eyebrow">03 — Besøk oss</p>
				<h2>Du finner oss i Oslo</h2>
				<address>
					{contactInfo.location.Kontoradresse}<br /><span
						>Post: {contactInfo.location.Postadresse}</span
					>
				</address>
				<p class="opening-hours">{contactInfo.location.Åpningstider}</p>
				<a
					class="text-link"
					href="https://www.google.com/maps/search/?api=1&query=Rosenholmveien+12+1252+Oslo"
					target="_blank"
					rel="noreferrer">Få veibeskrivelse <span aria-hidden="true">↗</span></a
				>
			</section>
		</div>
		<div class="direct-contact">
			<div>
				<h2 class="display-title">Leter du etter noen?</h2>
				<p>Finn riktig kontaktperson i oversikten over våre ansatte og avdelinger.</p>
			</div>
			<a class="button button-dark" href="/people"
				>Se alle ansatte <span aria-hidden="true">↗</span></a
			>
		</div>
	</div>
</section>

<section class="location-section" aria-labelledby="location-heading">
	<div class="site-container location-grid">
		<div class="location-copy">
			<p class="eyebrow">Her holder vi til</p>
			<h2 class="display-title" id="location-heading">Rosenholmveien 12.<br />Oslo.</h2>
			<p>Kontoradresse<br /><strong>{contactInfo.location.Kontoradresse}</strong></p>
			<p>Åpningstider<br /><strong>{contactInfo.location.Åpningstider}</strong></p>
			<a
				class="text-link"
				href="https://www.google.com/maps/search/?api=1&query=Rosenholmveien+12+1252+Oslo"
				target="_blank"
				rel="noreferrer">Åpne i Google Maps <span aria-hidden="true">↗</span></a
			>
		</div>
		<iframe
			title="Kart: Sørensen og Balchen, Rosenholmveien 12 i Oslo"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.3214341171545!2d10.794365677885205!3d59.82719217106928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168ed44619aa5%3A0xb8fcbd241e975ce1!2sRosenholmveien%2012%2C%201252%20Oslo!5e0!3m2!1sno!2sno!4v1702986133504!5m2!1sno!2sno"
			width="720"
			height="460"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>

<style>
	.contact-intro {
		padding: 112px 0 104px;
		background: var(--ink);
		color: #fff;
	}
	.intro-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 80px;
		align-items: end;
	}
	.contact-intro .eyebrow {
		color: #a0a5ac;
	}
	h1 {
		margin-top: 20px;
		font-size: clamp(64px, 7.2vw, 104px);
		line-height: 0.98;
	}
	.intro-grid > p {
		max-width: 440px;
		margin-bottom: 8px;
		font-size: 18px;
		line-height: 1.7;
		color: #c8cbd0;
	}
	.contact-details {
		padding: 96px 0;
		background: #fff;
	}
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		border: 1px solid var(--line);
	}
	.contact-card {
		min-width: 0;
		padding: 36px 30px;
	}
	.contact-card + .contact-card {
		border-left: 1px solid var(--line);
	}
	.contact-card .eyebrow {
		margin-bottom: 28px;
	}
	.contact-card h2 {
		font-size: 22px;
		font-weight: 750;
		line-height: 1.25;
		margin-bottom: 16px;
	}
	.contact-card > p:not(.eyebrow) {
		color: var(--muted);
		font-size: 15px;
		line-height: 1.65;
	}
	.phone-number {
		display: block;
		margin: 28px 0 8px;
		font-size: clamp(20px, 2vw, 28px);
		font-weight: 750;
		letter-spacing: -0.04em;
	}
	.email {
		text-decoration: underline;
		text-underline-offset: 4px;
		font-size: 15px;
	}
	.phone-number:hover,
	.email:hover {
		color: var(--accent);
	}
	.primary-card {
		background: var(--paper);
	}
	address {
		font-style: normal;
		font-size: 15px;
		line-height: 1.65;
	}
	address span {
		color: var(--muted);
	}
	.opening-hours {
		margin: 20px 0;
	}
	.direct-contact {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
		padding-top: 64px;
	}
	.direct-contact h2 {
		font-size: 40px;
		margin-bottom: 12px;
	}
	.direct-contact p {
		font-size: 15px;
		color: var(--muted);
	}
	.direct-contact .button {
		flex-shrink: 0;
	}
	.location-section {
		padding: 96px 0;
		background: var(--paper);
	}
	.location-grid {
		display: grid;
		grid-template-columns: 0.8fr 1.2fr;
		gap: 72px;
		align-items: center;
	}
	.location-copy h2 {
		margin: 20px 0 30px;
		font-size: clamp(38px, 4vw, 56px);
		line-height: 1.05;
	}
	.location-copy > p:not(.eyebrow) {
		color: var(--muted);
		font-size: 15px;
		line-height: 1.7;
		margin-bottom: 22px;
	}
	.location-copy strong {
		font-weight: 500;
		color: var(--ink);
	}
	iframe {
		display: block;
		width: 100%;
		height: 420px;
		border: 0;
		filter: grayscale(1);
		background: #e7e4df;
	}
	@media (max-width: 1050px) {
		.intro-grid {
			gap: 40px;
		}
		.contact-card {
			padding: 28px 22px;
		}
		.contact-card h2 {
			font-size: 20px;
		}
		.location-grid {
			gap: 40px;
		}
	}
	@media (max-width: 760px) {
		.contact-intro {
			padding: 64px 0;
		}
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}
		h1 {
			font-size: 66px;
		}
		.intro-grid > p {
			font-size: 16px;
			margin: 0;
		}
		.contact-details {
			padding: 48px 0 64px;
		}
		.contact-grid {
			grid-template-columns: 1fr;
		}
		.contact-card {
			padding: 30px 24px;
		}
		.contact-card + .contact-card {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
		.phone-number {
			font-size: 28px;
		}
		.direct-contact {
			padding-top: 44px;
			flex-direction: column;
			align-items: start;
			gap: 24px;
		}
		.direct-contact h2 {
			font-size: 34px;
		}
		.location-section {
			padding: 64px 0;
		}
		.location-grid {
			grid-template-columns: 1fr;
			gap: 36px;
		}
		iframe {
			height: 320px;
		}
	}
</style>
