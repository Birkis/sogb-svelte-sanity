<script lang="ts">
    import { urlFor } from "$lib/utils/image";

    export let content: any;

</script>


<!-- <pre>{JSON.stringify(content, null, 2)}</pre> -->

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-4">
    {#each content.selectedPosts as item}
        <div class=" bg-white rounded shadow-lg">
            <div class="aspect-w-1 aspect-h-1 w-full">
                <img class="object-cover" src={urlFor(item.mainImage).url()} alt="Post image">
            </div>
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">{item.title}</h2>
                <p class="text-gray-700 text-base">{item.excerpt}</p>
            </div>
        </div>
    {/each}
</div>