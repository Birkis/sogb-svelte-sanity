<script lang="ts">
    import type { PageData } from '../about/$types';
    
    export let data: PageData;


    console.log(data.bunnies.catalogue.children);  

    const cat  = data.bunnies.catalogue.children

 


</script>

<h1>About us</h1>

{#each cat as item}

    <p>{item.name}</p>

{/each}