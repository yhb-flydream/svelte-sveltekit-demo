<script>
  import { message } from '$lib';
  // import { page } from '$app/stores';
  /** @type {import('./$types').PageData}*/
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
  <div class="header">
    <h1>{data._title}</h1>
  </div>
  <div class="body flex flex-col items-center">
    <h2 class="mt-0">{data.title}</h2>
    <h3>Welcome to SvelteKit</h3>
    <p>{message}</p>
    <!-- Open the modal using ID.showModal() method -->
    <button
      class="btn btn-primary rounded-md active:bg-success"
      onclick="helloModal.showModal()"
    >
      Hello daisyUI
    </button>
  </div>
  <!-- <div class="footer"></div> -->

  <dialog id="helloModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Hello daisyUI!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</div>
