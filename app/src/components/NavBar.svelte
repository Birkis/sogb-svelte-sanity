<script>
  // Define your navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<nav class="shadow-md my-8 py-2 mx-auto w-4/5">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between items-center">
      <!-- Logo and brand name -->
      <div class="flex space-x-4 items-center">
        <div class="flex items-center text-red-600 text-xl font-bold">
          <svg class="h-8 w-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <!-- Insert your SVG path for the logo here -->
          </svg>
          S og B
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center space-x-1">
        {#each navLinks as link}
          <a
            class="{link.name === 'Contact' ? 'bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium' : ''}"
            href="{link.href}"
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
</div>
</nav>
<style>
  /* You can add custom styles if needed */
</style>
