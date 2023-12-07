<script lang="ts">
	import type { PageData } from './$types';
	import Profile from '../../components/Profile.svelte';

	export let data: PageData;

	const { employees } = data.props;

	console.log(data.props);
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
			<p class="mt-6 text-lg leading-8 text-gray-300">
				We’re a dynamic group of individuals who are passionate about what we do and dedicated to
				delivering the best results for our clients.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
		>

			{#each employees as employee}
				<li>
					<Profile {employee} />
				</li>
			{/each}

			<!-- More people... -->
		</ul>
	</div>
</div>
