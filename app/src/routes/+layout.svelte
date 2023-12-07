<script>
	
	// @ts-ignore
	import NavBar from "../components/NavBar.svelte";
	import Footer from "../components/Footer.svelte";
</script>
<div class="w-12/12 mx-auto">
		
			<nav class="mt-24">
				<NavBar />
			</nav>

			<main >
				<slot />
			</main>

			<Footer />
	
</div>

<style>
	@import '../app.css';

</style>