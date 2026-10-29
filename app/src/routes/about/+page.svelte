<script lang="ts">
	import type { PageData } from './$types';
	import EditorialPage from '../../components/EditorialPage.svelte';

	export let data: PageData;
</script>

<EditorialPage post={data.page} variant="about" />
