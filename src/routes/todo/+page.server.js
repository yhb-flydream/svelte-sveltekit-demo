import * as database from '$lib/server/database.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
	let userid = cookies.get('userid');

	if (!userid) {
		userid = crypto.randomUUID();
		cookies.set('userid', userid, { path: '/' });
	}

	return {
		todos: database.getTodos(userid)
	};
}
