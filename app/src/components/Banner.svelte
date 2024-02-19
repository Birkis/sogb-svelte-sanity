<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Banner } from '$lib/utils/sanity';

	export let content: any;

	// Ensure banner is defined before trying to access its properties
	$: banner = content && content.banner ? content.banner : null;


	// Use a reactive statement to update hotspot when banner changes
    // and ensure banner.mainImage and banner.mainImage.hotspot are defined
    $: hotspot = banner && banner.mainImage && banner.mainImage.hotspot ? banner.mainImage.hotspot : null;

    // Now you can safely use hotspot.x and hotspot.y, but ensure they are checked for null/undefined before use
    let x : number, y : number; 
	$: if (hotspot) {
        console.log(`Hotspot X: ${hotspot.x}, Hotspot Y: ${hotspot.y}`);
        // Further operations involving hotspot.x and hotspot.y
		x = hotspot.x * 100;
		y = hotspot.y * 100;
    }
	
	$: objectPositionStyle = `object-fit: cover; background-position: ${x}% ${y}%;`;


	let debug = false;

</script>

{#if debug}
	<pre>{JSON.stringify(banner, null, 2)}</pre>
{/if}


<div
	class="banner bg-cover bg-center h-[500px] flex items-center justify-center"
	style="{objectPositionStyle} background-image: url({urlFor(banner.mainImage).url()})"
>
	<div class=" text-white p-5 w-10/12 md:w-6/12 mx-auto">
		<h2 class="text-4xl font-bold mb-4">{banner.bannerTitle}</h2>
		<div class="mb-8">
			{#if banner.bannerBody}
				{#each banner.bannerBody as block}
					{#each block.children as child}
						<p class="mb-2">{child.text}</p>
					{/each}
				{/each}
			{/if}
		</div>
        {#if banner.bannerLink}
            <a
                href={banner.bannerLink}
                class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                {banner.bannerCTA}
            </a>
        {/if}
	</div>
</div>




<!-- <style>
	.image-hotspot {
		object-fit: cover;
		width: 100%; /* Ensure image covers the container */
		height: 100%; /* Adjust height as necessary, based on your aspect ratio */
		object-position: {`${x}% ${y}%`}; /* Example based on your hotspot values */
		}
</style> -->
