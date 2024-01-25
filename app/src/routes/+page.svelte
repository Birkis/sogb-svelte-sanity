<script lang="ts">
    import type { PageData  } from './$types';
    import HighlightedPeople from '../components/HighlightedPeople.svelte';
    import CustomerGrid from '../components/CustomerGrid.svelte';
    import PostGrid from '../components/PostGrid.svelte';
    import ExistingPost from '../components/ExistingPost.svelte';
	import Hero from '../components/Hero.svelte';
	import Banner from '../components/Banner.svelte';

    export let data: PageData;
    
    // Ensure homepage is defined and has at least one element
    const content : any = data.props.homepage[0] ?? [];

    if (content) {
        console.log("The Homepage object is:", content.pageBuilderContent);
    } else {
        console.error("Homepage content is not available.");
    }

    const componentMap: any = {
        postsGrid: PostGrid,
        existingPost: ExistingPost,
        salesPeople: HighlightedPeople,
        customerGrid: CustomerGrid,
		hero: Hero,
		banner: Banner
    }
</script>

<!-- <pre>{JSON.stringify(content, null, 2)}</pre> -->

{#if content && content.pageBuilderContent}
    {#each content.pageBuilderContent as component}
        {#if componentMap[component._type]}
            <svelte:component this={componentMap[component._type]} content={component} />
        {:else}
            <p>Component of type "{component._type}" not found.</p>
        {/if}
    {/each}
	{:else}
    <p>No content available to display.</p>
{/if}

