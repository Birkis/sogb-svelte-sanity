<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<a class="skip-link" href="#main-content">Hopp til innhold</a>
<NavBar />
<main id="main-content" tabindex="-1">
	<slot />
</main>
<Footer />

<style>
	.skip-link {
		position: fixed;
		top: 12px;
		left: 12px;
		z-index: 100;
		padding: 12px 20px;
		background: #fff;
		color: var(--ink);
		transform: translateY(-160%);
		font-weight: 700;
	}
	.skip-link:focus {
		transform: translateY(0);
	}
	main:focus {
		outline: none;
	}
</style>
