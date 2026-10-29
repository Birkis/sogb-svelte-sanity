<script>
	import { contactInfo } from '$lib/contactInfo';
</script>

<footer class="site-footer">
	<div class="site-container">
		<a href="/contact" class="footer-heading">Ta kontakt<span>.</span></a>
		<div class="contact-grid">
			<div>
				<h2 class="eyebrow">Kundesenter</h2>
				<a class="customer-phone" href="tel:+4722764444">{contactInfo.contactOrders.Telefon}</a>
				<a class="underlined" href="mailto:sogb@sogb.no">{contactInfo.contactOrders.Epost}</a>
			</div>
			<div>
				<h2 class="eyebrow">Sentralbord</h2>
				<a href="tel:+4722764400">{contactInfo.contactOffice.Telefon}</a>
				<p>Hverdager 08:00–16:00</p>
			</div>
			<div>
				<h2 class="eyebrow">Adresse</h2>
				<a
					href="https://www.google.com/maps/search/?api=1&query=Rosenholmveien+12+1252+Oslo"
					target="_blank"
					rel="noreferrer">Rosenholmveien 12<br />1252 Oslo</a
				>
				<p class="postal-address">Post: Postboks 134 Holmlia, 1203 Oslo</p>
			</div>
			<div>
				<h2 class="eyebrow">Følg oss</h2>
				{#each Object.entries(contactInfo.socialMedia) as [name, href]}
					<a class="underlined" {href} target="_blank" rel="noreferrer">{name}</a>
				{/each}
			</div>
		</div>
		<div class="footer-bottom">
			<p>© AS Sørensen og Balchen · Org.nr. 916 591 144</p>
			<div class="footer-links">
				<a href="/aktuelt">Aktuelt</a><a href="/skjema">Skjema</a><a href="/hms">HMS</a><a
					href="/personvern">Personvern</a
				><a href={contactInfo.Aapenhetsloven.AapenhetslovenLink}>Åpenhetsloven</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--ink);
		color: #f9f9f8;
		padding-top: 88px;
	}
	.footer-heading {
		display: inline-block;
		font-family: var(--font-display);
		font-size: clamp(68px, 6.4vw, 92px);
		line-height: 1;
		text-transform: uppercase;
		font-weight: 900;
		letter-spacing: -0.5px;
	}
	.footer-heading:hover span {
		color: var(--accent);
	}
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 32px;
		margin: 68px 0 82px;
	}
	.contact-grid .eyebrow {
		font-size: 11px;
		color: #9ca3ad;
		margin-bottom: 19px;
	}
	.contact-grid p,
	.contact-grid a {
		font-size: 16px;
		line-height: 1.65;
	}
	.contact-grid a {
		display: block;
		width: fit-content;
	}
	.contact-grid a:hover {
		color: #ed6c54;
	}
	.contact-grid .customer-phone {
		font-size: 24px;
		line-height: 1.3;
		font-weight: 700;
		margin-bottom: 5px;
	}
	.underlined {
		text-decoration: underline;
	}
	.contact-grid .postal-address {
		color: #a1a6ad;
		font-size: 14px;
	}
	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		padding: 24px 0 28px;
		border-top: 1px solid #292d32;
		color: #a1a6ad;
		font-size: 13px;
	}
	.footer-bottom a {
		text-decoration: underline;
	}
	.footer-bottom a:hover {
		color: #fff;
	}
	.footer-links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px 20px;
	}
	@media (max-width: 850px) {
		.contact-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 40px;
		}
	}
	@media (max-width: 600px) {
		.site-footer {
			padding-top: 62px;
		}
		.footer-heading {
			font-size: clamp(46px, 13.5vw, 64px);
		}
		.contact-grid {
			gap: 36px 20px;
			margin: 44px 0 52px;
		}
		.contact-grid .customer-phone {
			font-size: 20px;
		}
		.contact-grid p,
		.contact-grid a {
			font-size: 14px;
		}
		.contact-grid .eyebrow {
			font-size: 10px;
		}
		.footer-bottom {
			align-items: flex-start;
			flex-direction: column;
			font-size: 12px;
		}
	}
</style>
