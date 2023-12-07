<script lang="ts">
 import { onMount } from 'svelte';

let isMenuOpen = false;

// I need to write a function that will close the menu when the user clicks outside of it

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}




    const navItems = [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Investor Relations", href: "/investors" },
      { name: "Subsidiaries", href: "/subsidiaries" },
      { name: "Contact Us", href: "/contact" },
      { name: "Reklamasjon", href: "/reklamasjon" },
    ];
  </script>
  

  <nav class="p-4 flex items-center justify-between bg-slate-400 w-full">

    {#each navItems as item}
      <a href={item.href} class="text-white font-normal text-lg">{item.name}</a>
    {/each}
  
  </nav>

<style>

</style>