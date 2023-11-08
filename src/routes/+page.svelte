<script>
  import { message } from '$lib';
  // import { page } from '$app/stores';
  /** @type {import('./$types').PageData}*/
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <h1>{$page.data.title}</h1>
<h2>{$page.data._title}</h2> -->
<h1>{data.title}</h1>
<h2>{data._title}</h2>
<h3>Welcome to SvelteKit</h3>
<p>{message}</p>
