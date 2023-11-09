<script>
  // import { page } from '$app/stores';

  // let words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];
  // console.log('$page.params.path :>> ', $page.params);
  // $: depth = $page.params.path.split('/').filter(Boolean).length;
  // $: next =
  // 	depth === words.length ? '/deepRoute' : `/deepRoute/${words.slice(0, depth + 1).join('/')}`;

  export let data;
  let { words, depth, next } = data;
</script>

<svelte:head>
  {#if words[depth - 1]}
    <title>DeepRoute Page of {words[depth - 1] ?? 'how'}</title>
    <meta name="description" content="DeepRoute Page of {words[depth - 1] ?? 'how'}" />
  {/if}
</svelte:head>

<div class="container">
  <!-- <div class="header"></div> -->
  <div class="body flex flex-col items-center">
    {#each words.slice(0, depth) as word}
      <p class="text-3xl mt-1 mb-1">{word}</p>
    {/each}

    {#if depth}
      <div class="divider" />
    {/if}

    <p>
      <a class="btn btn-link text-6xl" href={next} data-sveltekit-reload>{words[depth] ?? '?'}</a>
    </p>
  </div>
  <!-- <div class="footer"></div> -->
</div>
