<script lang="ts">
    import { urlFor } from "$lib/utils/image";
    export let employee: any;
    const fullName = `${employee.firstName} ${employee.lastName}`;
  </script>
    
<!-- NEW DESIGN -->
  <li class="bg-white/5 rounded-2xl overflow-hidden">
    <img class="aspect-[14/13] w-full rounded-2xl object-cover" src={employee.profilePicture ? urlFor(employee.profilePicture).width(400).height(400).url() : 'default_profile.jpg'} alt={fullName}>
    <div class="p-6">
      <h3 class="mt-2 text-lg font-semibold leading-8 tracking-tight text-white">{fullName}</h3>
      <p class="mt-1 text-base leading-7 text-gray-300">{employee.position}</p>
      <div class="mt-4">
        <a href="mailto:{employee.email}" class="text-blue-500 hover:text-blue-700 underline">{employee.email}</a>
      </div>
      {#if employee.description}
        <div class="mt-4 text-gray-700">
          {#each employee.description as block}
            {#each block.children as span}
              <p>{span.text}</p>
            {/each}
          {/each}
        </div>
      {/if}
    </div>
  </li>