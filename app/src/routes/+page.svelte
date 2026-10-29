<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: leaders = data.props.leaders;
	const services = [
		{
			title: 'Distribusjon',
			description:
				'Slitedeler, rekvisita og tilbehør levert fra eget lager til forhandlere og verksteder i hele Norge.',
			icon: 'box',
			href: '/about'
		},
		{
			title: 'BilXtra-butikker',
			description:
				'Landsdekkende butikkjede for bilutstyr og reservedeler – for både privatkunder og profesjonelle.',
			icon: 'store',
			href: '/bilxtra'
		},
		{
			title: 'BilXtra-verksted',
			description:
				'Verkstedkjede med service og reparasjon på alle bilmerker, støttet av vår deleforsyning.',
			icon: 'wrench',
			href: '/bilxtra'
		},
		{
			title: 'Kundesenter',
			description:
				'Faglig hjelp til verksteder og forhandlere med bestilling, fitment og teknisk støtte.',
			icon: 'headset',
			href: '/contact'
		}
	];
</script>

<svelte:head>
	<title>Sørensen og Balchen — Deler som holder Norge i bevegelse</title>
	<meta
		name="description"
		content="Sørensen og Balchen leverer slitedeler, rekvisita og biltilbehør til verksteder og forhandlere i hele Norge. Bli kjent med oss og BilXtra."
	/>
</svelte:head>

<section class="hero" aria-labelledby="hero-heading">
	<div class="site-container hero-inner">
		<div class="hero-copy">
			<p class="eyebrow">AS Sørensen og Balchen · Oslo · Siden 1904</p>
			<h1 id="hero-heading">Deler som<br />holder Norge <span>i<br />bevegelse.</span></h1>
			<p class="hero-description">
				Vi distribuerer slitedeler, rekvisita og tilbehør til verksteder og forhandlere over hele
				landet – og står bak BilXtra, Norges største kjede for bilutstyr og reservedeler.
			</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#virksomhet">Hva vi gjør</a>
				<a class="button button-outline" href="/bilxtra"
					>Til BilXtra <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
		<span class="heritage-year" aria-hidden="true">1904</span>
	</div>
</section>

<div class="stats-strip" aria-label="Sørensen og Balchen i korte trekk">
	<dl class="site-container stats-grid">
		<div>
			<dt>1904</dt>
			<dd>Etablert som handelsfirma og bilimportør</dd>
		</div>
		<div>
			<dt>70+</dt>
			<dd>BilXtra-butikker i kjeden</dd>
		</div>
		<div>
			<dt>Komplett</dt>
			<dd>Slitedeler, rekvisita og tilbehør</dd>
		</div>
		<div>
			<dt>Fagfolk</dt>
			<dd>Menneskene bak leveransene</dd>
		</div>
	</dl>
</div>

<section class="about-section" aria-labelledby="about-heading">
	<div class="site-container about-grid">
		<div>
			<p class="eyebrow">01 — Om oss</p>
			<h2 id="about-heading" class="display-title">Over hundre år<br />i bilbransjen</h2>
		</div>
		<div class="about-copy">
			<p>
				Sørensen og Balchen er et av de eldste og mest tradisjonsrike selskapene i norsk bilbransje.
				Vi startet som handelsfirma og bilimportør i 1904, og er i dag en ledende distributør av
				slitedeler og tilbehør.
			</p>
			<p>
				De siste årene har vi bygget ut distribusjonsnettet gjennom oppkjøp og nye
				BilXtra-avdelinger – med samme mål som alltid: riktig del, på riktig sted, til riktig tid.
			</p>
			<a class="text-link" href="/people">Møt menneskene bak <span aria-hidden="true">→</span></a>
		</div>
	</div>
</section>

<section id="virksomhet" class="services-section" aria-labelledby="services-heading">
	<div class="site-container">
		<div class="section-heading">
			<div>
				<p class="eyebrow">02 — Virksomhet</p>
				<h2 id="services-heading" class="display-title">Hva vi gjør</h2>
			</div>
			<p>Fra sentrallager til verkstedgulvet – vi dekker hele verdikjeden for bildeler.</p>
		</div>
		<div class="service-grid">
			{#each services as service}
				<a class="service-card" href={service.href}>
					<svg
						viewBox="0 0 32 32"
						width="32"
						height="32"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						{#if service.icon === 'box'}
							<path d="m16 3 12 6v14l-12 6-12-6V9L16 3Z M4 9l12 6 12-6M16 15v14M10 6l12 6" />
						{:else if service.icon === 'store'}
							<path d="M4 13v15h24V13M3 13l3-9h20l3 9H3ZM8 28V18h8v10M21 18h3M7 8h18" />
						{:else if service.icon === 'wrench'}
							<path
								d="M27 5a9 9 0 0 1-12 12L6 27a3 3 0 0 1-4-4l10-9A9 9 0 0 1 23 2l-6 6 2 5 5 1 6-6M6 24h.01"
							/>
						{:else}
							<path
								d="M5 18v-4a11 11 0 0 1 22 0v4M5 16H3v10h6V16H5ZM27 16h2v10h-6V16h4ZM26 26c0 3-4 3-8 3"
							/>
						{/if}
					</svg>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
					<span class="service-arrow" aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="bilxtra-section" aria-labelledby="bilxtra-heading">
	<div class="site-container bilxtra-panel">
		<div class="bilxtra-copy">
			<p class="eyebrow">03 — Vår kjede</p>
			<h2 id="bilxtra-heading" class="display-title">BilXtra er en del<br />av familien</h2>
			<p class="bilxtra-description">
				Norges største kjede for bilutstyr og reservedeler, med over 70 butikker og verksteder fra
				sør til nord.
			</p>
			<div class="bilxtra-actions">
				<a class="button button-primary" href="https://bilxtra.no" target="_blank" rel="noreferrer"
					>Besøk bilxtra.no <span aria-hidden="true">↗</span></a
				>
				<a class="button button-outline" href="/contact">Bli BilXtra-forhandler</a>
			</div>
		</div>
		<a class="bilxtra-visual" href="/bilxtra" aria-label="Bli kjent med BilXtra">
			<div class="bilxtra-brand">
				<img src="/bilXtra_logo.png" alt="BilXtra" width="320" height="160" loading="lazy" />
				<span>En del av din bilhverdag.</span>
			</div>
			<span class="brand-corner" aria-hidden="true">↗</span>
		</a>
	</div>
</section>

<section class="people-section" aria-labelledby="people-heading">
	<div class="site-container">
		<p class="eyebrow">04 — Ansatte</p>
		<h2 id="people-heading" class="display-title">Ledelsen</h2>
		<div class="leader-grid">
			{#each leaders as leader}
				<a class="leader-card" href="/people">
					<div class="leader-image">
						{#if leader.portraitUrl}
							<img
								src={leader.portraitUrl}
								alt={`${leader.firstName} ${leader.lastName}`}
								width="600"
								height="750"
								loading="lazy"
							/>
						{:else}
							<div class="leader-initials" aria-hidden="true">
								{leader.firstName?.charAt(0)}{leader.lastName?.charAt(0)}
							</div>
						{/if}
					</div>
					<h3>{leader.firstName} {leader.lastName}</h3>
					<p>{leader.position}</p>
				</a>
			{/each}
		</div>
		<a class="text-link all-people" href="/people"
			>Se alle ansatte og avdelinger <span aria-hidden="true">→</span></a
		>
	</div>
</section>

<section class="opportunities-section" aria-label="Karriere og ansvarlig virksomhet">
	<div class="site-container opportunity-grid">
		<div class="opportunity careers">
			<p class="eyebrow">Karriere</p>
			<h2 class="display-title">Bli med på laget</h2>
			<p>
				Lager, salg, verksted eller digital – vi ser etter folk som liker biler og gode løsninger.
			</p>
			<a class="button button-dark" href="/karriere">Jobb hos oss</a>
		</div>
		<div class="opportunity responsibility">
			<p class="eyebrow">Ansvarlig virksomhet</p>
			<h2 class="display-title">Åpenhetsloven</h2>
			<p>
				Les vår redegjørelse for aktsomhetsvurderinger av grunnleggende menneskerettigheter og
				anstendige arbeidsforhold.
			</p>
			<a class="button button-outline" href="/Aapenhetsloven.pdf" download>
				<svg
					viewBox="0 0 20 20"
					fill="none"
					stroke="currentColor"
					stroke-width="1.4"
					width="17"
					height="17"
					aria-hidden="true"><path d="M10 2v11m-4-4 4 4 4-4M4 13v4h12v-4" /></svg
				>
				Last ned redegjørelse (PDF)
			</a>
		</div>
	</div>
</section>

<style>
	.hero {
		background: var(--ink);
		color: #fff;
		overflow: hidden;
	}
	.hero-inner {
		position: relative;
		padding-top: 92px;
		padding-bottom: 96px;
		min-height: 752px;
	}
	.hero-copy {
		position: relative;
		z-index: 1;
	}
	.hero .eyebrow {
		color: #9299a4;
		margin-bottom: 24px;
	}
	h1 {
		font-family: var(--font-display);
		font-size: clamp(76px, 7.8vw, 112px);
		font-weight: 900;
		letter-spacing: -0.8px;
		line-height: 0.92;
		text-transform: uppercase;
		margin: 0;
	}
	h1 span {
		color: var(--accent);
	}
	.hero-description {
		max-width: 570px;
		margin-top: 40px;
		font-size: 20px;
		line-height: 1.5;
		color: #d1d3d6;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 40px;
	}
	.hero .button-outline,
	.bilxtra-copy .button-outline {
		border-color: #343a42;
		color: #fff;
	}
	.hero .button-outline:hover,
	.bilxtra-copy .button-outline:hover {
		border-color: #fff;
		background: #22272e;
	}
	.heritage-year {
		position: absolute;
		right: -5px;
		bottom: -12px;
		font-family: 'Barlow Condensed', var(--font-display);
		font-size: 310px;
		font-weight: 900;
		line-height: 1;
		letter-spacing: -7px;
		color: var(--ink);
		-webkit-text-stroke: 3px #323943;
		paint-order: stroke fill;
		pointer-events: none;
	}
	.stats-strip {
		background: var(--accent);
		color: #fff;
	}
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 32px;
		padding-block: 29px 32px;
	}
	.stats-grid dt {
		font-family: var(--font-display);
		font-size: clamp(36px, 3.33vw, 48px);
		font-weight: 900;
		line-height: 1.1;
		text-transform: uppercase;
	}
	.stats-grid dd {
		margin-top: 4px;
		font-size: 15px;
		font-weight: 500;
	}
	.about-section {
		padding: 120px 0 128px;
	}
	.about-grid {
		display: grid;
		grid-template-columns: 0.85fr 1.1fr;
		gap: 80px;
	}
	.about-copy p {
		font-size: 20px;
		line-height: 1.55;
		margin: 0 0 22px;
	}
	.about-copy .text-link {
		margin-top: 12px;
		font-size: 17px;
	}
	.services-section {
		background: #fff;
		padding: 120px 0;
	}
	.section-heading {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 40px;
		margin-bottom: 58px;
	}
	.section-heading > p {
		max-width: 420px;
		color: #535b65;
		font-size: 17px;
		line-height: 1.6;
	}
	.service-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		border: 1px solid var(--line);
	}
	.service-card {
		position: relative;
		min-height: 362px;
		padding: 44px 32px;
		transition: background 0.2s ease;
	}
	.service-card + .service-card {
		border-left: 1px solid var(--line);
	}
	.service-card:hover {
		background: var(--paper);
	}
	.service-card svg {
		margin-bottom: 20px;
	}
	.service-card h3 {
		font-size: 25px;
		line-height: 1.2;
		font-weight: 700;
		margin-bottom: 16px;
	}
	.service-card p {
		font-size: 17px;
		line-height: 1.5;
		color: #535b65;
	}
	.service-arrow {
		position: absolute;
		right: 25px;
		bottom: 25px;
		color: var(--accent);
		font-size: 24px;
		opacity: 0;
		transition: opacity 0.2s;
	}
	.service-card:hover .service-arrow,
	.service-card:focus-visible .service-arrow {
		opacity: 1;
	}
	.bilxtra-section {
		padding: 120px 0;
	}
	.bilxtra-panel {
		display: grid;
		grid-template-columns: 1.08fr 0.92fr;
		background: var(--ink);
		color: #fff;
	}
	.bilxtra-copy {
		padding: 62px 56px;
	}
	.bilxtra-copy .eyebrow {
		color: #9ca3ad;
		margin-bottom: 25px;
	}
	.bilxtra-copy .display-title {
		font-size: 60px;
	}
	.bilxtra-description {
		margin-top: 28px;
		font-size: 18px;
		line-height: 1.5;
		color: #d1d3d6;
		max-width: 580px;
	}
	.bilxtra-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 34px;
	}
	.bilxtra-actions .button {
		font-size: 15px;
		padding-inline: 25px;
	}
	.bilxtra-visual {
		display: grid;
		place-items: center;
		position: relative;
		overflow: hidden;
		background: repeating-linear-gradient(
			135deg,
			#1b2027,
			#1b2027 15px,
			#171c23 15px,
			#171c23 31px
		);
	}
	.bilxtra-brand {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 70%;
		transition: transform 0.3s ease;
	}
	.bilxtra-brand img {
		width: 100%;
		height: auto;
	}
	.bilxtra-brand span {
		margin-top: 15px;
		font-size: 13px;
		font-family: var(--font-mono);
		letter-spacing: 1px;
		color: #aeb4be;
		text-align: center;
	}
	.bilxtra-visual:hover .bilxtra-brand {
		transform: scale(1.035);
	}
	.brand-corner {
		position: absolute;
		right: 30px;
		bottom: 22px;
		font-size: 30px;
		color: #949da8;
	}
	.people-section {
		background: #fff;
		padding: 120px 0;
	}
	.leader-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 32px;
		margin-top: 58px;
	}
	.leader-image {
		background: #e9e6df;
		aspect-ratio: 4 / 5;
		overflow: hidden;
	}
	.leader-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: saturate(0.72);
		transition:
			filter 0.25s,
			transform 0.4s;
	}
	.leader-card:hover img {
		filter: saturate(1);
		transform: scale(1.025);
	}
	.leader-initials {
		height: 100%;
		display: grid;
		place-items: center;
		font-family: var(--font-display);
		font-size: 90px;
		color: #94918b;
	}
	.leader-card h3 {
		margin: 12px 0 2px;
		font-size: 20px;
		font-weight: 700;
		line-height: 1.25;
	}
	.leader-card p {
		color: #535b65;
		font-size: 15px;
		line-height: 1.4;
	}
	.all-people {
		font-size: 17px;
		margin-top: 48px;
	}
	.opportunities-section {
		padding: 120px 0;
	}
	.opportunity-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 32px;
	}
	.opportunity {
		padding: 48px;
	}
	.careers {
		border: 1px solid var(--ink);
	}
	.responsibility {
		background: #e9e6df;
	}
	.opportunity .display-title {
		font-size: 46px;
	}
	.opportunity > p:not(.eyebrow) {
		font-size: 18px;
		line-height: 1.5;
		margin: 24px 0;
		color: #535b65;
	}
	.opportunity .button {
		font-size: 16px;
	}
	.opportunity .button-outline {
		border-color: #86878a;
	}
	@media (min-width: 1600px) {
		.hero-inner {
			min-height: 780px;
		}
	}
	@media (max-width: 1100px) {
		.hero-inner {
			min-height: 690px;
		}
		.heritage-year {
			font-size: 250px;
		}
		.hero-description {
			max-width: 520px;
		}
		.about-grid {
			gap: 48px;
		}
		.service-card {
			padding: 32px 24px;
			min-height: 330px;
		}
		.service-card h3 {
			font-size: 22px;
		}
		.bilxtra-copy {
			padding: 48px 36px;
		}
		.bilxtra-copy .display-title {
			font-size: 50px;
		}
		.leader-grid {
			gap: 24px;
		}
		.opportunity {
			padding: 36px;
		}
	}
	@media (max-width: 850px) {
		.hero-inner {
			padding-top: 74px;
			padding-bottom: 150px;
			min-height: 720px;
		}
		h1 {
			font-size: 82px;
		}
		.heritage-year {
			font-size: 220px;
			bottom: -15px;
			right: -10px;
			opacity: 0.7;
		}
		.hero-description {
			max-width: 510px;
		}
		.about-section,
		.services-section,
		.bilxtra-section,
		.people-section,
		.opportunities-section {
			padding-block: 80px;
		}
		.about-grid {
			grid-template-columns: 1fr;
			gap: 36px;
		}
		.section-heading {
			align-items: flex-start;
			flex-direction: column;
			gap: 24px;
			margin-bottom: 36px;
		}
		.service-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.service-card {
			min-height: 290px;
		}
		.service-card:nth-child(3) {
			border-left: 0;
		}
		.service-card:nth-child(n + 3) {
			border-top: 1px solid var(--line);
		}
		.bilxtra-panel {
			grid-template-columns: 1fr;
		}
		.bilxtra-visual {
			min-height: 290px;
		}
		.bilxtra-brand {
			max-width: 300px;
		}
		.leader-grid {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 36px;
		}
		.opportunity-grid {
			gap: 24px;
		}
		.opportunity {
			padding: 30px 26px;
		}
		.opportunity .display-title {
			font-size: 40px;
		}
		.stats-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			row-gap: 26px;
			padding-block: 30px;
		}
	}
	@media (max-width: 600px) {
		.hero-inner {
			padding-top: 58px;
			padding-bottom: 150px;
			min-height: 0;
		}
		.hero .eyebrow {
			font-size: 9px;
			letter-spacing: 1px;
			margin-bottom: 25px;
		}
		h1 {
			font-size: clamp(44px, 12vw, 74px);
			letter-spacing: -0.5px;
			line-height: 0.98;
		}
		.hero-description {
			font-size: 18px;
			line-height: 1.5;
			margin-top: 30px;
		}
		.hero-actions {
			margin-top: 28px;
			gap: 10px;
		}
		.heritage-year {
			font-size: 170px;
			bottom: -8px;
			right: -5px;
			-webkit-text-stroke-width: 1px;
		}
		.stats-grid {
			gap: 28px 20px;
		}
		.stats-grid dt {
			font-size: clamp(25px, 7vw, 38px);
		}
		.stats-grid dd {
			font-size: 13px;
			max-width: 160px;
		}
		.about-section,
		.services-section,
		.bilxtra-section,
		.people-section,
		.opportunities-section {
			padding-block: 64px;
		}
		.about-copy p {
			font-size: 18px;
		}
		.section-heading > p {
			font-size: 17px;
		}
		.service-card {
			padding: 27px 20px;
			min-height: 285px;
		}
		.service-card h3 {
			font-size: 21px;
		}
		.service-card p {
			font-size: 15px;
			line-height: 1.5;
		}
		.bilxtra-copy {
			padding: 38px 26px;
		}
		.bilxtra-copy .display-title {
			font-size: 44px;
		}
		.bilxtra-actions {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}
		.bilxtra-description {
			font-size: 17px;
		}
		.bilxtra-visual {
			min-height: 240px;
		}
		.bilxtra-brand {
			max-width: 235px;
		}
		.leader-grid {
			margin-top: 34px;
			gap: 28px 18px;
		}
		.leader-card h3 {
			font-size: 18px;
		}
		.leader-card p {
			font-size: 13px;
		}
		.all-people {
			margin-top: 36px;
			font-size: 16px;
		}
		.opportunity-grid {
			grid-template-columns: minmax(0, 1fr);
		}
		.opportunity {
			padding: 32px 26px;
		}
		.opportunity .display-title {
			font-size: clamp(30px, 8.5vw, 40px);
		}
		.opportunity > p:not(.eyebrow) {
			font-size: 17px;
		}
	}
	@media (max-width: 370px) {
		.service-grid {
			grid-template-columns: 1fr;
		}
		.service-card + .service-card {
			border-left: 0;
			border-top: 1px solid var(--line);
		}
		.service-card {
			min-height: 230px;
		}
	}
</style>
