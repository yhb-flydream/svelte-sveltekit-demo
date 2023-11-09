<script>
  export let data;
</script>

<div class="container">
  <!-- <div class="header"></div> -->
  <div class="body flex items-start">
    <main class="flex-1">
      <slot />
    </main>

    <aside>
      <h2 class="mt-3">More posts</h2>
      <ul class="m-0">
        {#each data.navs as { path, title }}
          <li>
						<a class="btn btn-link" href="/blog/{path}" data-sveltekit-reload>{title}</a>
          </li>
        {/each}
      </ul>
    </aside>
  </div>
  <!-- <div class="footer"></div> -->
</div>
