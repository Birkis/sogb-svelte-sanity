<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { contactInfo } from '$lib/contactInfo';

	let isOpen = false;
	let menuButton: HTMLButtonElement;
	const navLinks = [
		{ name: 'Om oss', href: '/about' },
		{ name: 'Virksomhet', href: '/#virksomhet' },
		{ name: 'BilXtra', href: '/bilxtra' },
		{ name: 'Ansatte', href: '/people' },
		{ name: 'Karriere', href: '/karriere' }
	];
	afterNavigate(() => {
		isOpen = false;
	});
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			isOpen = false;
			menuButton?.focus();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<header class="site-header">
	<div class="utility-bar">
		<div class="site-container utility-inner">
			<a href="tel:+4722764444">Kundesenter: {contactInfo.contactOrders.Telefon}</a>
			<span>Hverdager 08:00–16:00 · Rosenholmveien 12, Oslo</span>
		</div>
	</div>
	<div class="site-container navigation">
		<a class="wordmark" href="/" aria-label="Sørensen og Balchen — til forsiden">
			<img src="/logo.webp" alt="Sørensen og Balchen" width="340" height="34" />
		</a>
		<nav class="desktop-nav" aria-label="Hovedmeny">
			{#each navLinks as link}
				<a href={link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					>{link.name}</a
				>
			{/each}
			<a
				class="contact-button"
				href="/contact"
				aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>Kontakt oss</a
			>
		</nav>
		<button
			class="menu-toggle"
			bind:this={menuButton}
			type="button"
			aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
			aria-expanded={isOpen}
			aria-controls="mobile-menu"
			on:click={() => {
				isOpen = !isOpen;
			}}
		>
			<span>{isOpen ? 'Lukk' : 'Meny'}</span>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				width="24"
				height="24"
				aria-hidden="true"
			>
				{#if isOpen}<path d="m5 5 14 14M5 19 19 5" />{:else}<path d="M3 7h18M3 17h18" />{/if}
			</svg>
		</button>
	</div>
	<nav
		id="mobile-menu"
		class="mobile-nav"
		class:open={isOpen}
		aria-label="Mobilmeny"
		inert={!isOpen}
	>
		<div class="site-container">
			{#each navLinks as link}
				<a
					href={link.href}
					on:click={() => {
						isOpen = false;
					}}
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					>{link.name}<span aria-hidden="true">↗</span></a
				>
			{/each}
			<a
				class="mobile-contact"
				href="/contact"
				on:click={() => {
					isOpen = false;
				}}>Kontakt oss <span aria-hidden="true">↗</span></a
			>
		</div>
	</nav>
</header>

<style>
	.site-header {
		background: var(--ink);
		color: #fff;
		border-bottom: 1px solid #2b2f35;
	}
	.utility-bar {
		border-bottom: 1px solid #24282d;
	}
	.utility-inner {
		min-height: 36px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		font-family: var(--font-mono);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.8px;
		color: #afb2b6;
	}
	.utility-inner a:hover {
		color: #fff;
	}
	.navigation {
		height: 82px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
	}
	.wordmark {
		flex-shrink: 0;
	}
	.wordmark img {
		display: block;
		width: 340px;
		height: auto;
	}
	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 28px;
		font-size: 14px;
		font-weight: 600;
	}
	.desktop-nav a {
		white-space: nowrap;
		transition: color 0.18s;
	}
	.desktop-nav a:hover,
	.desktop-nav a[aria-current='page'] {
		color: #ed6c54;
	}
	.desktop-nav .contact-button {
		padding: 12px 22px;
		background: var(--accent);
		color: #fff;
	}
	.desktop-nav .contact-button:hover {
		background: #aa2815;
		color: #fff;
	}
	.menu-toggle,
	.mobile-nav {
		display: none;
	}
	@media (max-width: 1100px) {
		.wordmark img {
			width: 285px;
		}
		.desktop-nav {
			gap: 18px;
			font-size: 13px;
		}
		.navigation {
			gap: 24px;
		}
	}
	@media (max-width: 950px) {
		.desktop-nav {
			display: none;
		}
		.menu-toggle {
			display: inline-flex;
			gap: 12px;
			align-items: center;
			min-height: 44px;
			font-size: 14px;
			font-weight: 600;
		}
		.mobile-nav.open {
			display: block;
			padding: 12px 0 28px;
			border-top: 1px solid #2b2f35;
		}
		.mobile-nav a {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 17px 0;
			border-bottom: 1px solid #2b2f35;
			font-size: 20px;
			font-weight: 600;
		}
		.mobile-nav a:hover,
		.mobile-nav a[aria-current='page'] {
			color: #ed6c54;
		}
		.mobile-nav .mobile-contact {
			color: #ed6c54;
		}
		.utility-inner {
			font-size: 9px;
			letter-spacing: 0.4px;
		}
	}
	@media (max-width: 600px) {
		.utility-inner {
			min-height: 30px;
			font-size: 9px;
		}
		.utility-inner span {
			display: none;
		}
		.navigation {
			height: 76px;
			gap: 12px;
		}
		.wordmark img {
			width: 230px;
		}
		.menu-toggle {
			gap: 6px;
		}
	}
	@media (max-width: 370px) {
		.wordmark img {
			width: 204px;
		}
		.menu-toggle span {
			display: none;
		}
	}
</style>
