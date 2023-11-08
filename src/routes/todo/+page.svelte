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
    data.todos.find(it => it.id === todo.id).done = done;
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

<div class="centered">
  <h1>todos</h1>

  <input
    class="new-todo"
    type="text"
    autocomplete="off"
    data-sveltekit-keepfocus
    on:keydown={addTodo}
    placeholder="what needs to be done?"
  />

  <div class="left">
    <h2>todo</h2>
    <ul class="todos">
      {#each data.todos.filter((t) => !t.done) as todo (todo.id)}
        <li in:receive={{ key: todo.id }} out:send={{ key: todo.id }} animate:flip>
          <label>
            <input type="checkbox" checked={todo.done} on:change={(e) => changeTodo(e, todo)} />
            <span>{todo.description}</span>
            <button aria-label="Mark as complete" on:click={(e) => deleteTodo(todo)} />
          </label>
        </li>
      {/each}
    </ul>
  </div>

  <div class="right">
    <h2>done</h2>
    <ul class="todos">
      {#each data.todos.filter((t) => t.done) as todo (todo.id)}
        <li in:receive={{ key: todo.id }} out:send={{ key: todo.id }} animate:flip>
          <label>
            <input type="checkbox" checked={todo.done} on:change={(e) => changeTodo(e, todo)} />
            <span>{todo.description}</span>
            <button aria-label="Mark as complete" on:click={(e) => deleteTodo(todo)} />
          </label>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .centered {
    max-width: 50em;
    margin: 0 auto;
  }

  label {
    display: flex;
    width: 100%;
  }

  input[type='text'] {
    flex: 1;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    background: url(@/static/svg/remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }

  .new-todo {
    font-size: 1.4em;
    width: 100%;
    margin: 1em 0;
  }

  .left,
  .right {
    float: left;
    width: 50%;
    padding: 0 1em 0 0;
    box-sizing: border-box;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
    user-select: none;
  }
</style>
