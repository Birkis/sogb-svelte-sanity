<script lang="ts">

    import { urlFor } from "$lib/utils/image";
    import type { Brand } from '$lib/utils/sanity';

    export let content: any;
    let debug = false;
    let brands : Brand[] = content.brands.selectedBrands;

</script>

{#if debug}
    <pre>{JSON.stringify(content, null, 2)}</pre>

{/if}


<div class="my-8 mx-4">
    <div class="w-full text-center">
        <h2 class="text-4xl w-full font-bold">{content.brands.title}</h2>
    </div>
    <div class="flex flex-wrap justify-center py-6">
        {#each brands as item}
            <div class="w-1/2 h-12 md:h-24 md:w-1/3 lg:w-1/5 xl:w-1/6 2xl:w-1/7 flex justify-center">
                <img class="w-full  object-contain filter grayscale mx-4 my-2 px-8" src={urlFor(item.brandLogo).url()} alt={item.brandName}>
            </div>
        {/each}
    </div>
</div>