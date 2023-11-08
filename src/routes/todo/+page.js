/** @type {import('./$types').PageLoad} */
export function load({ data }) {

  return {
    title: 'Todos Page',
    todos: data.todos,
  };
}
