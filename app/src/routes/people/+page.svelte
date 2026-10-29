<script lang="ts">
	import type { PageData } from './$types';
	import Profile from '../../components/Profile.svelte';

	export let data: PageData;
	let searchQuery = '';
	let selectedDepartment = '';

	$: employees = data.props.employees ?? [];
	$: departments = [
		...new Set(employees.map((employee) => employee.department).filter(Boolean))
	].sort((a, b) => a.localeCompare(b, 'nb'));
	$: filteredEmployees = employees.filter((employee) => {
		const fullName = `${employee.firstName ?? ''} ${employee.lastName ?? ''}`.toLocaleLowerCase(
			'nb'
		);
		return (
			fullName.includes(searchQuery.trim().toLocaleLowerCase('nb')) &&
			(!selectedDepartment || employee.department === selectedDepartment)
		);
	});

	function resetFilters() {
		searchQuery = '';
		selectedDepartment = '';
	}
</script>

<svelte:head>
	<title>Ansatte — Sørensen og Balchen</title>
	<meta
		name="description"
		content="Møt menneskene i Sørensen og Balchen. Finn din kontaktperson og se alle våre ansatte og avdelinger."
	/>
</svelte:head>

<section class="people-intro">
	<div class="site-container intro-grid">
		<div>
			<p class="eyebrow">04 — Ansatte</p>
			<h1 class="display-title">Menneskene<br />bak delene.</h1>
		</div>
		<p class="intro-copy">
			Fra lager og logistikk til butikk og kundesenter. Vi er menneskene som holder hjulene i gang —
			og hjelper deg videre.
		</p>
	</div>
</section>

<section class="directory" aria-label="Ansattoversikt">
	<div class="site-container">
		<div class="directory-tools">
			<div class="search-field">
				<label class="eyebrow" for="employee-search">Finn din kontaktperson</label>
				<div class="search-input">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg
					>
					<input
						id="employee-search"
						type="search"
						bind:value={searchQuery}
						placeholder="Søk etter navn"
						autocomplete="off"
					/>
				</div>
			</div>
			<div class="department-select">
				<label class="eyebrow" for="department">Avdeling</label>
				<select id="department" bind:value={selectedDepartment}>
					<option value="">Alle avdelinger</option>
					{#each departments as department}<option value={department}>{department}</option>{/each}
				</select>
			</div>
		</div>
		<div class="department-buttons" role="group" aria-label="Filtrer etter avdeling">
			<button
				class:active={selectedDepartment === ''}
				aria-pressed={selectedDepartment === ''}
				on:click={() => (selectedDepartment = '')}>Alle avdelinger</button
			>
			{#each departments as department}
				<button
					class:active={selectedDepartment === department}
					aria-pressed={selectedDepartment === department}
					on:click={() => (selectedDepartment = department)}>{department}</button
				>
			{/each}
		</div>
		<div class="directory-heading">
			<h2 class="display-title">{selectedDepartment || 'Alle avdelinger'}</h2>
			<p aria-live="polite" aria-atomic="true">
				{filteredEmployees.length}
				{filteredEmployees.length === 1 ? 'ansatt' : 'ansatte'}
			</p>
		</div>
		{#if filteredEmployees.length > 0}
			<ul class="people-grid">
				{#each filteredEmployees as employee}<li><Profile {employee} /></li>{/each}
			</ul>
		{:else}
			<div class="empty-state">
				<h3>Ingen ansatte funnet</h3>
				<p>Prøv et annet navn eller velg en annen avdeling.</p>
				<button class="button button-dark" on:click={resetFilters}>Vis alle ansatte</button>
			</div>
		{/if}
	</div>
</section>

<style>
	.people-intro {
		padding: 112px 0 104px;
		background: var(--paper);
	}
	.intro-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 80px;
		align-items: end;
	}
	h1 {
		margin-top: 20px;
		font-size: clamp(56px, 6.2vw, 88px);
		line-height: 0.98;
	}
	.intro-copy {
		max-width: 460px;
		margin: 0 0 8px;
		font-size: 18px;
		line-height: 1.7;
		color: var(--muted);
	}
	.directory {
		background: #fff;
		padding: 88px 0 120px;
	}
	.directory-tools {
		display: flex;
		gap: 24px;
	}
	.search-field {
		width: 440px;
		max-width: 100%;
	}
	.search-field label,
	.department-select label {
		display: block;
		margin-bottom: 12px;
	}
	.search-input {
		display: flex;
		align-items: center;
		gap: 14px;
		border: 1px solid var(--line);
		padding: 0 18px;
	}
	.search-input:focus-within {
		border-color: var(--ink);
		outline: 1px solid var(--ink);
	}
	.search-input svg {
		flex-shrink: 0;
		color: var(--muted);
	}
	input {
		width: 100%;
		min-width: 0;
		padding: 16px 0;
		border: 0;
		outline: none;
		background: transparent;
		font-size: 16px;
		color: var(--ink);
	}
	input::placeholder {
		color: var(--muted);
	}
	.department-select {
		display: none;
	}
	.department-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 9px;
		margin-top: 28px;
	}
	.department-buttons button {
		border: 1px solid var(--line);
		padding: 11px 17px;
		font-size: 13px;
		font-weight: 600;
		transition:
			background 150ms,
			color 150ms;
	}
	.department-buttons button:hover {
		border-color: var(--ink);
	}
	.department-buttons button.active {
		background: var(--ink);
		border-color: var(--ink);
		color: #fff;
	}
	.directory-heading {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 24px;
		margin: 64px 0 30px;
		padding-top: 26px;
		border-top: 1px solid var(--line);
	}
	.directory-heading h2 {
		font-size: 36px;
	}
	.directory-heading p {
		flex-shrink: 0;
		color: var(--muted);
		font-size: 13px;
	}
	.people-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 54px 30px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.empty-state {
		padding: 65px 24px;
		text-align: center;
		background: var(--paper);
	}
	.empty-state h3 {
		font-size: 23px;
		font-weight: 700;
	}
	.empty-state p {
		margin: 12px 0 24px;
		color: var(--muted);
	}
	@media (max-width: 1050px) {
		.intro-grid {
			gap: 40px;
		}
		.people-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 44px 24px;
		}
	}
	@media (max-width: 760px) {
		.people-intro {
			padding: 64px 0;
		}
		.intro-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}
		h1 {
			font-size: 60px;
		}
		.intro-copy {
			font-size: 16px;
		}
		.directory {
			padding: 48px 0 72px;
		}
		.directory-tools {
			flex-direction: column;
		}
		.search-field {
			width: 100%;
		}
		.department-select {
			display: block;
		}
		.department-select select {
			width: 100%;
			padding: 16px;
			border: 1px solid var(--line);
			border-radius: 0;
			background: #fff;
			color: var(--ink);
			font-size: 16px;
		}
		.department-buttons {
			display: none;
		}
		.directory-heading {
			margin-top: 40px;
		}
		.directory-heading h2 {
			font-size: 30px;
		}
		.people-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 36px 20px;
		}
	}
	@media (max-width: 430px) {
		.people-grid {
			grid-template-columns: 1fr;
			gap: 38px;
		}
	}
</style>
