<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/utils/image';
    import type { Post } from '$lib/utils/sanity'
    import type { PortableText } from '@portabletext/svelte';

    export let post: Post 

    console.log("The post object is:", post);

    // Function to render the appropriate HTML element based on the style
    function renderElement(block:any) {
    switch(block.style) {
        case 'h1':
            return `<h1>${renderChildren(block.children)}</h1>`;
        case 'h2':
            return `<h2>${renderChildren(block.children)}</h2>`;
        // Add more cases for different styles
        default:
            return `<p>${renderChildren(block.children)}</p>`;
        }
    }

    // Function to apply marks like bold, italic, etc.
    function renderChildren(children:any) {
        // Check if children is an array before mapping over it
        if (Array.isArray(children)) {
            return children.map(child => {
                if (child.marks && child.marks.includes('bold')) {
                    return `<strong>${child.text}</strong>`;
                }
                // Add more cases for different marks
                return child.text;
            }).join('');
        }
        return ''; // Return empty string if children is not an array
    }

</script>


<div class="bg-transparent text-sm flex flex-col items-start py-4 md:py-24">
    {#if post.mainImage}
        <img
            class="w-[500px] h-[300px] object-cover rounded-md"
            src={urlFor(post.mainImage).width(500).height(300).url()}
            alt="Cover image for {post.title}"
        />
    {:else}
        <div class="w-[500px] h-[300px] bg-gray-200 rounded-md" />
    {/if}

    <div class="py-8">
        <h3 class="text-lg font-bold text-gray-800">
            <a class="hover:underline" href={`/post/${post.slug.current}`}>
                {post.title}
            </a>
        </h3>
        <p class="mt-2 truncate-2 font-bold">{post.excerpt}</p>

        {#if post.body}
            <div class="mt-4 text-gray-500">
                {#each post.body as block (block._key)}
                    {#each block.children as child (child._key)}
                        {@html renderElement(child)}    
                    {/each}
                {/each}
            </div>
        {/if}

        <p class="mt-2 font-thin text-xs  text-gray-900">
            {formatDate(post._createdAt)}
        </p>
    </div>

    <div class="mt-auto py-6">
        <a
            class="px-6 py-3 bg-red-500 text-white rounded-full font-serif hover:bg-red-600"
            href={`/post/${post.slug.current}`}
        >
            Read more
        </a>
    </div>

</div>

<style>
    .truncate-4 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    .truncate-2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>