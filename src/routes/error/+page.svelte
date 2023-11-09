<script>
  /** @type {import('./$types').PageData}*/
  export let data;
</script>

<div class="container">
  <div class="header">
    <h1>{data.title}</h1>
  </div>
  <div class="body flex flex-col items-center">
    <ul>
      {#each data.navs as { path, title }}
        <li><a class="btn btn-link" data-sveltekit-preload-data="off" href="/error/{path}">{title}</a></li>
      {/each}
    </ul>
  </div>
  <!-- <div class="footer"></div> -->
</div>
