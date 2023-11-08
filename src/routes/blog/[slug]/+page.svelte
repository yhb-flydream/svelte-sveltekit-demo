<script>
  import { message } from '$lib';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
</svelte:head>

<h1>{data.title}</h1>
<p>{message}</p>
