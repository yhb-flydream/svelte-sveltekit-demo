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

<ul>
  {#each data.navs as { path, title }}
    <li>
      <a href="/blog/{path}" data-sveltekit-reload>{title}</a>
    </li>
  {/each}
</ul>
