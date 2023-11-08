<script>
  /** @type {import('./$types').LayoutData}*/
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
</svelte:head>

<h1>{data.title}</h1>

<slot>
  <a href="/deepRoute/how">how</a>
</slot>
