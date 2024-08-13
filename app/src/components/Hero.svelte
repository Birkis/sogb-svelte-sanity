<script lang="ts">
	import { urlFor } from '$lib/utils/image';
	export let content: any;

</script>


<div class="bg-slate-950 w-full relative">
	<img src={urlFor(content.hero.backgroundImage).width(1000).quality(30).url()} alt="Background" class="absolute inset-0 w-full h-full object-cover z--10 opacity-50">	
		<div class="relative isolate px-6 pt-14 lg:px-8">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			/>
			<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div class=" max-w-s mx-auto my-2 sm:mb-8 sm:flex sm:justify-center gap-2">
					<div
						class=" text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20"
					>
						Finn sikkerhetsdatablad. 
							<a href="https://app.ecoonline.com/public/search-configuration/search?companyID=1002502&prodType=er&descrLang=1" class="font-bold text-white"
							><span class="absolute inset-0" aria-hidden="true" />Les mer
							<span aria-hidden="true">&rarr;</span></a
						>
					</div>
					<div
					class=" text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20"
					>
					Last ned returskjema. 
						<a href="https://sorensenogbalchen.sharepoint.com/:b:/s/Hovedkontor/EcjcEni6O0dNsdLh615LvWMBazjxpSKs3D05tl_Lr9heAA?e=LutkhG" class="font-bold text-white"
						><span class="absolute inset-0" aria-hidden="true" />Les mer
						<span aria-hidden="true">&rarr;</span></a
					>
				</div>
				</div>
				
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
						{content.hero.heading}
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-200">
						{content.hero.subheading}				
					</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="{content.hero.primaryCta.link}"
							class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>{content.hero.primaryCta.label}</a
						>
						<!-- <a href="{content.hero.secondaryCta.link}" class="text-sm font-semibold leading-6 text-gray-100"
							>{content.hero.secondaryCta.label} <span aria-hidden="true">→</span></a
						> -->
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
			</div>
		</div>
</div>