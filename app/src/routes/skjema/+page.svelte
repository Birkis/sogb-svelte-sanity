<script lang="ts">
    import type { PageData } from './$types';
    import type { Forms } from '$lib/utils/sanity';
    
    export let data: PageData;

    const forms:Forms[] = data.forms

    console.log(forms)

</script>

<div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Skjema</h1>
  
    <div class="flex flex-col items-center">
      <ul class="w-full max-w-lg">
        {#each forms as form}
          <li class="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <div class="flex-1">
              <span class="text-lg font-medium">{form.title}</span>
              {#if form.description}
                <p class="text-sm text-gray-600">{form.description}</p>
              {/if}
            </div>
            {#if form.file?.asset?.url}
              <a 
                href={form.file.asset.url} 
                download
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
              >
                Last ned
              </a>
            {:else}
              <span class="text-sm text-red-500">Skjema ikke tilgjengelig</span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  