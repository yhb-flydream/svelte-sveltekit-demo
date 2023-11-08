import * as database from '$lib/server/database.js';

export async function PUT({ params, request, cookies }) {
  const { done } = await request.json();
  /** @type {any} userid */
  const userid = cookies.get('userid');

  await database.toggleTodo({ userid, id: params.id, done });
  return new Response(null, { status: 204 });
}

export async function DELETE({ params, cookies }) {
	/** @type {any} userid */
  const userid = cookies.get('userid');

  await database.deleteTodo({ userid, id: params.id });
  return new Response(null, { status: 204 });
}
