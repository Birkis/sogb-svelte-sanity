
<script lang="ts">

    import type { HeaderBanner } from '$lib/utils/sanity';
    import { urlFor } from '$lib/utils/image';

    export let bannerData: HeaderBanner;
  </script>
  

  
  <div class="banner bg-gray-200 p-6 rounded-lg shadow-md">
    {#if bannerData}
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{bannerData.bannerTitle}</h2>
      
      <div class="banner-body text-gray-600 mb-4">
        {@html bannerData.bannerBody}
      </div>
  
      {#if bannerData.bannerLink && bannerData.bannerCTA}
        <a href={bannerData.bannerLink} class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          {bannerData.bannerCTA}
        </a>
      {/if}
  
      {#if bannerData.mainImage}
        <img src={urlFor(bannerData.mainImage.asset).url()} alt={bannerData.bannerTitle} class="banner-image mt-4" />      {/if}
    {/if}
  </div>
  