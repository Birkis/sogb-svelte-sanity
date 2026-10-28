<script lang="ts">

    import { urlFor } from "$lib/utils/image";
    import type { Customer } from '$lib/utils/sanity';

    export let content: Customer[];

</script>


{#each content as item}
     <p>{item.brandName}</p>
     <img src={urlFor(item.brandLogo).width(600).auto('format').url()} alt={item.brandName}>
{/each}