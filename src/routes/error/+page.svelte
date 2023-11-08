<script>
	/** @type {import('./$types').PageData}*/
	export let data;
</script>

<ul>
	{#each data.navs as { path, title }}
		<li><a href="/error/{path}">{title}</a></li>
	{/each}
</ul>
