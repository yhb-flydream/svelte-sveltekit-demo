<script>
  /** @type {import('./$types').LayoutData}*/
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
</svelte:head>

<div class="container">
  <div class="header">
    <h1>{data.title}</h1>
  </div>
  <div class="body flex flex-col items-center">
    <slot>
      <a href="/deepRoute/how">how</a>
    </slot>
  </div>
  <!-- <div class="footer"></div> -->
</div>
