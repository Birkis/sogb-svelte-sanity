<script lang="ts">
	import type { RichTextBlock } from "$lib/utils/sanity";


    export let blocks : RichTextBlock[];
    // Her bruker vi Record som er en slags 'åpen' type, som kan ha hvilken som helst key og value
    // Det er nyttig fordi jeg kan sette inn hva som helst hvor som helst uten å få en feilmelding
    export let customStyles : Record<string, string> = {};
  
  </script>
  
  {#each blocks as item (item._key)}
  {#if item.style === 'h1'}
    <h1 class="text-4xl font-semibold">{item.children[0].text}</h1>
  {:else if item.style === 'h2'}
    <h2 class="text-3xl font-semibold">{item.children[0].text}</h2>
  {:else if item.style === 'h3'}
    <h3 class="text-2xl font-semibold">{item.children[0].text}</h3>
  {:else if item.style === 'h4'}
    <h4 class="text-xl font-semibold">{item.children[0].text}</h4>
  {:else if item.style === 'strong'}
    <p class="py-2 font-bold">{item.children[0].text}</p>
  {:else if item.style === 'blockquote'}
      <blockquote
      class={`
        py-2 italic text-lg border-l-4 border-gray-500 pl-4
        ${customStyles.width ? `${customStyles.width}` : 'w-full'}
      `}
    >
      {item.children[0].text}
    </blockquote>
  {:else if item.listItem === 'bullet'}
    <ul class="list-disc list-inside">
      {#each item.children as child (child._key)}
        <li>{child.text}</li>
      {/each}
    </ul>
  {:else if item.markDefs && item.markDefs.length > 0 && item.markDefs[0]._type === 'link'}
    <!-- I class under setter jeg inn en custom style for link color, som bare noe jeg setter her og da også i RichText blokken -->
    <a href={item.markDefs[0].href} class={customStyles.linkColor || "text-blue-500"} >
      {#each item.children as child (child._key)}
        {child.text}
      {/each}
    </a>
  {:else}
    <p class="py-2">
      {#each item.children as child (child._key)}
      {#if child.marks && child.marks.includes('strong')}
        <strong>{child.text}</strong>
      {:else if child.marks && child.marks.includes('em')}
        <em>{child.text}</em>
      {:else}
        {child.text}
      {/if}
    {/each}
    </p>
  {/if}
{/each}
  