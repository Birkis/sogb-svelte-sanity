<script>
	
	// @ts-ignore
	import NavBar from "../components/NavBar.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<div class="w-full mx-auto max-w-[1800px] bg-gray-100">
    <nav class="">
        <NavBar />
    </nav>

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
    @import '../app.css';
</style>