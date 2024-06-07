<script lang="ts">
  import { urlFor } from "$lib/utils/image";
  export let employee: any;

  // Make fullName reactive
  $: fullName = `${employee.firstName} ${employee.lastName}`;
</script>

<li class="bg-white/5 rounded-2xl overflow-hidden">
  <img class="aspect-[1/1] w-full rounded-2xl object-cover object-top" src={employee.profilePicture ? urlFor(employee.profilePicture).width(400).height(400).quality(10).url() : 'default_profile.jpg'} alt={fullName} loading="lazy">
  <div class="p-6">
      <h3 class="mt-2 text-lg font-semibold leading-8 tracking-tight text-white">{fullName}</h3>
      <p class="mt-1 text-base leading-7 text-gray-300 font-semibold">{employee.department}</p>
      <p class="mt-1 text-base leading-7 text-gray-300 font-light">{employee.position}</p>
      <div class="mt-0">
          <a href="tel:{employee.phone}" class="text-white text-base font-light ">Tlf: {employee.phone}</a>
          <a href="mailto:{employee.email}" class="text-blue-500 hover:text-blue-700 text-base underline">{employee.email}</a>
      </div>
  </div>
</li>
