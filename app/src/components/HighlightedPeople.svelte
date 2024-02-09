<script lang="ts">
    import { urlFor } from "$lib/utils/image";
	import type { SalesTeamBlock } from "$lib/utils/sanity";

    export let content: any;

    const salesPeople: any = content.salesPeopleBlock;

    let debug = false;

</script>


{#if debug}
    <pre>{JSON.stringify(content, null, 2)}</pre>

{/if}  

<!-- I want to use CSS GRID to create two rows. The first row with two columns. The second row with three columns  -->
<div class="py-8 md:px-14">
    <!-- Cols with txt -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-8">
        <div class="md:col-span-3 p-4">
            <h2 class="text-3xl md:text-5xl font-black text-gray-700 w-12/12 md:w-10/12">{salesPeople.mainTitle}</h2>   
        </div>
  {#if salesPeople.subTitle !=null} 
      <div class="p-4">
            <h3 class="text-2xl text-gray-400 font-extrabold md:text-3xl">{salesPeople.subTitle}</h3>
        </div>  
    {/if}
    </div>

    <!-- cols  with images -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto">
        <div class="p-4 md:col-span-2 h-[500px] md:h-[500]">
                <img class="w-full h-2/3 object-cover object-top mb-4" src={urlFor(salesPeople.salesPeople[0].image).width(500).url()} alt="">

            {#if salesPeople.salesPeople[0].description != null}
                <h3 class="text-3xl font-semibold text-gray-500 py-4">{salesPeople.salesPeople[0].description}</h3>
                
            {/if}
            
            {#if salesPeople.salesPeople[0].link.slug.current}
                <a href="/post/{salesPeople.salesPeople[0].link.slug.current}" class=" py-2 text-base font-semibold text-slate-900  hover:text-black underline">
                    Les mer
                </a>
            {/if}
            
        </div>
        <div class="p-4 md:col-span-1 h-[500px] md:h-[500]">
            <img class="w-full h-3/4 object-cover object-top" src={urlFor(salesPeople.salesPeople[1].image).width(250).url()} alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">{salesPeople.salesPeople[1].description}</p>
                {#if salesPeople.salesPeople[1].link.slug.current}
                <a href="/post/{salesPeople.salesPeople[1].link.slug.current}" class=" py-2 px-4 text-base font-semibold text-white underline">
                    Les mer
                </a>
            {/if}
            </div>
        </div>
        <div class="p-4 md:col-span-1 h-[500px] md:h-[500]">
            <img class="w-full h-3/4 object-cover object-top" src={urlFor(salesPeople.salesPeople[2].image).width(250).url()} alt="">
            <div class="bg-gray-800 h-1/4">
                <p class="text-white p-4">{salesPeople.salesPeople[2].description}</p>
                {#if salesPeople.salesPeople[2].link.slug.current}
                    <a href="/post/{salesPeople.salesPeople[2].link.slug.current}" class=" py-2 px-4 text-base font-semibold text-white underline">
                        Les mer
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>