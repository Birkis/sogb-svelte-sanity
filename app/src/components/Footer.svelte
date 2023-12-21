<script>
    // Footer data structured as an object with arrays
  import { contactInfo } from "$lib/contactInfo";

  </script>
  
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 my-16">
          <h5 class="text-sm font-regular text-red-500/75 mb-2">{contactInfo.title}</h5>
          <ul>
            {#each Object.entries(contactInfo.location) as [key, value]}
              <li class="mb-4 text-gray-400 text-xs">{`${key} : ${value}`}</li>
            {/each}
            {#each Object.entries(contactInfo.contactOffice) as [key, value]}
              <li class="mb-4 text-gray-400 text-xs">{`${key} : ${value}`}</li>
            {/each}
          </ul>
        </div>
        <div class="w-full md:w-1/3 px-4 my-16">
          <h5 class="text-sm font-regular text-red-500/75 mb-2">Ordrekontor</h5>
          <ul>
            {#each Object.entries(contactInfo.contactOrders) as [key, value]}
              <li class="mb-4 text-gray-400 text-xs">{` ${value}`}</li>
            {/each}
          </ul>
        </div>
        <div class="w-full md:w-1/3 px-4 my-16">
          <h5 class="text-sm font-regular text-red-500/75 mb-2">Social Media</h5>
          <ul>
            {#each Object.entries(contactInfo.socialMedia) as [key, value]}
              <li class="mb-4 text-gray-400 text-xs"><a href={value}>{key}</a></li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </footer>
