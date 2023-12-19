<script lang="ts">
	import type { PageData } from './$types';
	import Profile from '../../components/Profile.svelte';

	export let data: PageData;

	type Department = string | null;

	const { employees } = data.props;
	let searchQuery = '';
	let selectedDepartment = null;

	$: departments = [...new Set(employees.map((employee) => employee.department))];

    // Filter employees based on search query and selected department
    $: filteredEmployees = employees.filter(employee => {
        const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
        return fullName.includes(searchQuery.toLowerCase()) &&
               (selectedDepartment  === null || employee.department === selectedDepartment);
    });

	function selectDepartment(department: Department) {
        selectedDepartment = department;
    }

	$: console.log(searchQuery, filteredEmployees);

</script>



<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto lg:mx-0">
			<div class=" w-full md:w-6/12">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dette er oss</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Vi er en dynamisk gruppe individer som er lidenskapelig opptatt av det vi gjør og dedikert til å levere de beste resultatene for våre kunder.
				</p>
			</div>
			<input type="text" bind:value={searchQuery} placeholder="Finn ansatt" class="mt-6 w-full md:w-3/12 p-2 rounded border border-gray-300">
			<!-- Department Buttons -->
			<div class="mt-6 flex w-full flex-wrap gap-2">
				<button 
					class="px-4 py-2 rounded bg-blue-500 text-white" 
					on:click={() => selectDepartment(null)}>
					Alle avdelinger
				</button>
				{#each departments as department}
					<button 
						class="px-4 py-2 rounded bg-blue-500 text-white" 
						on:click={() => selectDepartment(department)}>
						{department}
					</button>
				{/each}
			</div>
		</div>
		<ul
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
		>

			

			{#each filteredEmployees as employee}
				<li>
					<Profile {employee} />
				</li>
			{/each}

			<!-- More people... -->
		</ul>
	</div>
</div>
