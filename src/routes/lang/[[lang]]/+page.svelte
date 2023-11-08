<script>
  /** @type {import('./$types').PageData}*/
  export let data;
</script>

<svelte:head>
  <title>Lang Page of {data.lang}</title>
  <meta name="description" content="Lang Page of {data.lang}" />
</svelte:head>

<h1>{data.greeting}</h1>
