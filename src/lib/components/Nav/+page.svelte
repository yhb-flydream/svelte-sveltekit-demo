<script>
  import { page, navigating } from '$app/stores';
  /** @type {any} */
  export let navs;
  import { onMount } from 'svelte';

  let time = new Date();

  // these automatically update when `time`
  // changes, because of the `$:` prefix
  $: year = time.getFullYear();
  $: month = time.getMonth() + 1;
  $: day = time.getDate();
  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="navbar bg-primary text-primary-content">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl" href="/"> Svelte </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <div class="menu menu-horizontal m-0 p-0">
      {#each navs as { path, title }}
        <a
          class="btn btn-ghost normal-case text-base"
          class:btn-active={$page.url.pathname === path}
          href={path}
          aria-current={$page.url.pathname === path}
        >
          {title}
        </a>
      {/each}
    </div>
  </div>
  <div class="navbar-end">
    <!-- {#if $navigating}
      navigating to {$navigating.to?.url.pathname}
    {/if} -->
    <div class="grid grid-flow-col gap-4 text-center auto-cols-max">
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <!-- <span style="--value:{year};" /> -->
          {year}
        </span>
        year
      </div>
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <span style="--value:{month};" />
        </span>
        month
      </div>
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <span style="--value:{day};" />
        </span>
        day
      </div>
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <span style="--value:{hours};" />
        </span>
        hours
      </div>
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <span style="--value:{minutes};" />
        </span>
        min
      </div>
      <div class="flex flex-col items-center p-1.5 bg-neutral rounded-box text-neutral-content">
        <span class="countdown font-mono text-3xl">
          <span style="--value:{seconds};" />
        </span>
        sec
      </div>
    </div>
  </div>
</div>
