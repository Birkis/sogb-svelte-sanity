<script lang="ts">
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';

  // Define your navigation links
  const navLinks = [
    { name: 'Hjem', href: '/' },
    { name: 'Om oss', href: '/about' },
    // { name: 'HMS', href: '/hms' },
    { name: 'Ansatte', href: '/people'},
    // { name: 'Kontakt', href: '/contact' },
    {name: 'BilXtra', href: '/bilxtra'}
  ];


  /**
	 * @type {string | null}
	 */
  let currentPage : any;
  let isOpen : Boolean;
  $: {
    currentPage = $page.route.id;
    isOpen = false;
  }

  let menuElement : any;

  onMount(() => {
    const handleClickOutside = (event : any) => {
      if (menuElement && !menuElement.contains(event.target)) {
        isOpen = false;
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

</script>


<nav class="bg-gray-950">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 justify-between">
      <div class="flex">
        <div class="-ml-2 mr-2 flex items-center md:hidden">
          
          <!-- Mobile menu button -->
          <button bind:this={menuElement} type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" on:click={() => isOpen = !isOpen}>
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        
        </div>
        <div class="flex flex-shrink-0 items-center">
          <a href="/">
            <img class="w-64" src="logo.webp" alt="Your Company">
          </a>        </div>
        <!-- actual buttons -->
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
          {#each navLinks as link}
            <a 
              href={link.href} 
              class="rounded-md px-3 py-2 text-sm font-medium 
                {currentPage === link.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
            >
              {link.name}
            </a>          
          {/each}
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if isOpen}
  <div class="md:hidden" id="mobile-menu"  >
    <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
      {#each navLinks as link}
        <a 
         
          href={link.href} 
          class="{currentPage === link.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium"
        >
          {link.name}
        </a>
      {/each}
    </div>
 
  </div>
  {/if}
</nav>


