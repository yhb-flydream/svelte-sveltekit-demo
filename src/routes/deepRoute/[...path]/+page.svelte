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

<div class="flex">
  {#each words.slice(0, depth) as word}
    <p>{word}</p>
  {/each}

  <p><a href={next} data-sveltekit-reload>{words[depth] ?? '?'}</a></p>
</div>

<style>
  .flex {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0.5rem 0;
    line-height: 1;
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
</style>
