<script>
    const stats = [
        { label: 'Number of deploys', value: '405' },
        { label: 'Average deploy time', value: '3.65', unit: 'mins' },
        { label: 'Number of servers', value: '3' },
        { label: 'Success rate', value: '98.5%', unit: '' },
    ];
</script>

<div class="bg-gray-500">
    <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {#each stats as stat}
                <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                    <p class="text-sm font-medium leading-6 text-gray-400">{stat.label}</p>
                    <p class="mt-2 flex items-baseline gap-x-2">
                        <span class="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
                        {#if stat.unit}
                            <span class="text-sm text-gray-400">{stat.unit}</span>
                        {/if}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
  