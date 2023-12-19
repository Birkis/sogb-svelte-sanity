<script lang="ts">

    import { urlFor } from "$lib/utils/image";
    import type { ImageGallery } from "$lib/utils/sanity";
	import type { ImageAsset } from "@sanity/types";
    export let galleryData : any;

    let images : ImageAsset[] = galleryData.images;

    console.log("Gallery - Component:", images);

  </script>
  
  <div class="gallery-container my-8">
    <p>{galleryData.description}</p>

    {#each images as image }
       <!-- content here -->
        <img src={urlFor(image.image.asset).width(400).url()} alt="some" />    
    {/each}

  </div>