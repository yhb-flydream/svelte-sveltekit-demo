import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params: { slug } }) {
	if (!slug) throw error(404);

	return {
		title: `Blog Page of ${slug}`
	};
}
