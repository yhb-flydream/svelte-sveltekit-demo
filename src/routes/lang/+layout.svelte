<script>
	/** @type {import('./$types').LayoutData}*/
	export let data;
</script>

<h1>{data.title}</h1>

<ul>
	{#each data.langs as { path, title }}
		<li><a href="/lang/{path}" data-sveltekit-reload>{title}</a></li>
	{/each}
</ul>

<slot />
