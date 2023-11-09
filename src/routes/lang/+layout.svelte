<script>
  /** @type {import('./$types').LayoutData}*/
  export let data;
</script>

<div class="container">
  <div class="header">
    <h1>{data.title}</h1>
  </div>
  <div class="body flex flex-col items-center">
    <ul>
      {#each data.langs as { path, title }}
        <li><a class="btn btn-link" href="/lang/{path}" data-sveltekit-reload>{title}</a></li>
      {/each}
    </ul>
		<div class="divider"></div> 
    <slot />
  </div>
  <!-- <div class="footer"></div> -->
</div>
