import * as database from '$lib/server/database';

/**
 * @param {{
 *   params: any,
 *   request: Request,
 *   cookies: import('@sveltejs/kit').Cookies,
 * }} opts
 */
export async function PUT({ params, request, cookies }) {
  const { done } = await request.json();
  const userid = cookies.get('userid');

  await database.toggleTodo({ userid, id: params.id, done });
  return new Response(null, { status: 204 });
}

/**
 * @param {{
 *   params: any,
 *   cookies: import('@sveltejs/kit').Cookies,
 * }} opts
 */
export async function DELETE({ params, cookies }) {
  const userid = cookies.get('userid');

  await database.deleteTodo({ userid, id: params.id });
  return new Response(null, { status: 204 });
}
