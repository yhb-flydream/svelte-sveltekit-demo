<script>
  import { page, navigating } from '$app/stores';
  /** @type {any} */
  export let navs;
</script>

<nav>
  {#each navs as { path, title }}
    <a href={path} aria-current={$page.url.pathname === path}>
      {title}
    </a>
  {/each}

  {#if $navigating}
    navigating to {$navigating.to?.url.pathname}
  {/if}
</nav>
