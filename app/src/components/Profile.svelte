<script lang="ts">
	import type { Image } from '@sanity/types';
	import type { Employee } from '$lib/utils/sanity';
	import { urlFor } from '$lib/utils/image';

	export let employee: Employee & {
		position?: string;
		phone?: string | number;
		email?: string;
		profilePicture?: Image;
	};

	$: fullName = [employee.firstName, employee.lastName].filter(Boolean).join(' ');
</script>

<article class="profile">
	<div class="portrait">
		<img
			src={employee.profilePicture
				? urlFor(employee.profilePicture).width(560).height(700).fit('crop').quality(85).url()
				: '/default_profile.jpg'}
			alt={fullName}
			width="560"
			height="700"
			loading="lazy"
		/>
	</div>
	<div class="profile-details">
		<h3>{fullName}</h3>
		{#if employee.position}<p class="position">{employee.position}</p>{/if}
		{#if employee.department}<p class="department">{employee.department}</p>{/if}
		{#if employee.phone || employee.email}
			<div class="profile-contact">
				{#if employee.phone}
				<a href="tel:{String(employee.phone).replace(/\s/g, '')}">{employee.phone}</a>
				{/if}
				{#if employee.email}
					<a href="mailto:{employee.email}">{employee.email}</a>
				{/if}
			</div>
		{/if}
	</div>
</article>

<style>
	.profile {
		min-width: 0;
	}
	.portrait {
		overflow: hidden;
		background: #e9e6e0;
	}
	.portrait img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: top;
	}
	.profile-details {
		padding-top: 18px;
	}
	h3 {
		margin: 0 0 5px;
		font-size: 20px;
		font-weight: 750;
		line-height: 1.25;
	}
	p {
		margin: 0;
		font-size: 14px;
		line-height: 1.5;
	}
	.position {
		color: var(--ink);
	}
	.department {
		color: var(--muted);
	}
	.profile-contact {
		display: grid;
		justify-items: start;
		gap: 5px;
		margin-top: 16px;
		font-size: 14px;
	}
	.profile-contact a {
		max-width: 100%;
		overflow-wrap: anywhere;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.profile-contact a:hover {
		color: var(--accent);
	}
	@media (max-width: 600px) {
		h3 {
			font-size: 18px;
		}
		.profile-details {
			padding-top: 14px;
		}
	}
</style>
