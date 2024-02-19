<script lang="ts">
    import { urlFor } from "$lib/utils/image";

    export let content: any;


    let debug = false;

</script>


{#if debug}
    <pre>{JSON.stringify(content, null, 2)}</pre>
{/if}

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-4">
    {#each content.selectedPosts as item}
        <div class=" bg-white ">
            <div class="aspect-w-1 aspect-h-1 w-full">
                <img class="object-cover h-[300px]" src={urlFor(item.mainImage).url()} alt="Post image">
            </div>
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">{item.title}</h2>
                <p class="text-gray-700 text-base">{item.excerpt}</p>
                <button class="font-bold text-lg text-gray-800 underline mt-4 hover:font-extrabold text-black">
                    <a href={`/post/${item.slug.current}`}>
                        Les mer
                    </a>
            </div>
        </div>
    {/each}
</div>