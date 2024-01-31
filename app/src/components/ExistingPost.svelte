<script lang="ts">
	import type { Post } from '$lib/utils/sanity';
    import { urlFor } from '$lib/utils/image';

    export let content: any;
    console.log("The content object is: ", content);

    let post : Post = content.existingPostContent; 

</script>



<div class="p-4 bg-white   flex flex-col sm:flex-row">
    <div class="aspect-w-1 aspect-h-1 w-full sm:w-1/2">
        <img class="object-cover" src={urlFor(post.mainImage).url()} alt="Post image">
    </div>    
    <div class="p-6 w-full my-auto mx-auto md:w-1/3">
        <h2 class="text-2xl font-bold mb-2">{post.title}</h2>
        <p class="text-gray-700 text-base">{post.excerpt}</p>
        <button class="rounded-md bg-indigo-600 px-3.5 my-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <a href={`/post/${post.slug.current}`}>
            Les mer
            </a>
        </button>
    </div>
</div>

