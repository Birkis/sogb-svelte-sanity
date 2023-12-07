<script>
    // Footer data structured as an object with arrays
    const footerSections = {
      about: {
        title: "Galactic Guidance",
        content: [
          "Interstellar hitchhiking: the art of traveling the cosmos on a shoestring budget.",
          "Towel 101: the most massively useful thing an intergalactic hitchhiker can have."
        ]
      },
      resources: {
        title: "Astrolabe Cache",
        content: [
          "Navigational aids for the spatially perplexed.",
          "The Guide: an electronic book with all the answers (mostly)."
        ]
      },
      services: {
        title: "Quantum Help & Assistance",
        content: [
          "Improbability drive repair and maintenance.",
          "Babel fish translation services: understand anything said to you in any language."
        ]
      },
      contact: {
        title: "Earth Relocations",
        content: [
          "Interplanetary moving solutions.",
          "Real estate offerings: from cozy asteroid belts to spacious gas giants."
        ]
      }
    };
  </script>
  
<footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
            {#each Object.entries(footerSections) as [section, { title, content }]}
                <div class="w-full md:w-1/4 px-4 my-16">
                    <h5 class="text-sm font-regular text-red-500/75 mb-2">{title}</h5>
                    <ul>
                        {#each content as text}
                            <li class="mb-4 text-gray-400 text-xs">{text}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</footer>
  
  <style>
    /* Additional styles if needed */
  </style>
  