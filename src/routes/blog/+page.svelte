<script>
  import { message } from '$lib';

  /** @type {import('./$types').PageData} */
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
    <p>{message}</p>

    <ul class="m-0">
      {#each data.navs as { path, title }}
        <li>
          <a class="btn btn-link" href="/blog/{path}" data-sveltekit-reload>{title}</a>
        </li>
      {/each}
    </ul>
  </div>
  <!-- <div class="footer"></div> -->
</div>
