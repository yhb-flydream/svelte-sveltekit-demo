<script>
	import { page, navigating, updated } from '$app/stores';
	import Nav from '$lib/components/Nav/+page.svelte'

	import '../app.css';

	/** @type {import('./$types').LayoutData}*/
	export let data;
</script>

<!-- <nav>
	{#each data.navs as { path, title }}
		<a href={path} aria-current={$page.url.pathname === path}>{title}</a>
	{/each}

	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
</nav> -->

<Nav navs={data.navs}></Nav>

<!-- <svelte:component this={data.Nav} /> -->

<div class="p-5">
	<slot />
</div>

{#if $updated}
	<p class="toast">
		A new version of the app is available

		<button on:click={() => location.reload()}> reload the page </button>
	</p>
{/if}
