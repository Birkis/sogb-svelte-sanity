<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	import type { Banner } from '$lib/utils/sanity';

	export let content: any;

	const banner: Banner = content.banner;

	console.log('The Banner object is:', banner);

	// your script goes here
</script>

<div
	class="banner bg-cover bg-center h-[500px] flex items-center justify-center"
	style="background-image: url({urlFor(banner.mainImage).url()})"
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
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {banner.bannerCTA}
            </a>
        {/if}
	</div>
</div>
