/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { layoutMessage } = await parent();
	return {
		title: 'About Page',
		layoutMessage
	};
}
