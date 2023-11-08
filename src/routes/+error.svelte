<script>
  import { page } from '$app/stores';
  import { emojis } from '$lib/error';
</script>

<svelte:head>
  <title>{$page.status}</title>
  <meta name="description" content={$page.error?.message} />
</svelte:head>

<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em">
  {emojis[$page.status] ?? emojis[500]}
</span>
