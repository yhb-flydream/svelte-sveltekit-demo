<script>
  /** @type {import('./$types').PageData}*/
  export let data;

  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  const [send, receive] = crossfade({
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });

  /** @param {any} e */
  async function addTodo(e) {
    if (e.key === 'Enter') {
      const input = e.currentTarget;
      const description = input.value;

      const response = await fetch('/todo/api', {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { id } = await response.json();

      data.todos = [
        ...data.todos,
        {
          id,
          description
        }
      ];

      input.value = '';
    }
  }

  /**
   * @param {{ currentTarget: { checked: any; }; }} e
   * @param {any} todo
   */
  async function changeTodo(e, todo) {
    const done = e.currentTarget.checked;

    await fetch(`/todo/api/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify({ done }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('data.todos :>> ', data.todos);
    data.todos.find((it) => it.id === todo.id).done = done;
    data.todos = [...data.todos];
  }

  /** @param {any} todo */
  async function deleteTodo(todo) {
    await fetch(`/todo/api/${todo.id}`, {
      method: 'DELETE'
    });

    data.todos = data.todos.filter((t) => t !== todo);
  }
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
</svelte:head>

<div class="container flex flex-col max-w-none">
  <h1 class="text-left">todos</h1>

  <input
    class="input input-bordered input-primary max-w-2xl m-auto w-full mb-5"
    type="text"
    autocomplete="off"
    data-sveltekit-keepfocus
    on:keydown={addTodo}
    placeholder="what needs to be done?"
  />

  <div class="todos flex justify-between items-start gap-10">
    <div class="card shadow-md flex-1">
      <div class="card-body">
        <p class="card-title mt-0">todo</p>
        <div class="todo-list flex flex-col">
          {#each data.todos.filter((t) => !t.done) as todo (todo.id)}
            <label
              class="label cursor-pointer flex"
              in:receive={{ key: todo.id }}
              out:send={{ key: todo.id }}
              animate:flip
            >
              <input
                type="checkbox"
                class="checkbox checkbox-primary mr-2"
                checked={todo.done}
                on:change={(e) => changeTodo(e, todo)}
              />
              <span class="label-text text-lg flex-1">{todo.description}</span>
              <button
                class="btn btn-circle btn-xs"
                aria-label="Mark as complete"
                on:click={(e) => deleteTodo(todo)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  /></svg
                >
              </button>
            </label>
          {/each}
        </div>
      </div>
    </div>
    <div class="card shadow-md flex-1">
      <div class="card-body">
        <p class="card-title mt-0">done</p>
        <div class="todo-list flex flex-col">
          {#each data.todos.filter((t) => t.done) as todo (todo.id)}
            <label
              class="label cursor-pointer flex"
              in:receive={{ key: todo.id }}
              out:send={{ key: todo.id }}
              animate:flip
            >
              <input
                type="checkbox"
                class="checkbox checkbox-primary mr-2"
                checked={todo.done}
                on:change={(e) => changeTodo(e, todo)}
              />
              <span class="label-text text-lg flex-1">{todo.description}</span>
              <button
                class="btn btn-circle btn-xs"
                aria-label="Mark as complete"
                on:click={(e) => deleteTodo(todo)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  /></svg
                >
              </button>
            </label>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
