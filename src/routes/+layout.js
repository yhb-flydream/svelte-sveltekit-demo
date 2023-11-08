// export const ssr = true; default was SSR
// export const csr = false; you can set CSR
/** @interface Array */
const navs = [
	{
		path: '/',
		title: 'Home'
	},
	{
		path: '/about',
		title: 'About'
	},
	{
		path: '/blog',
		title: 'Blog'
	},
	{
		path: '/todo',
		title: 'Todo'
	},
	{
		path: '/error',
		title: 'Error'
	},
	{
		path: '/lang',
		title: 'Lang'
	},
	{
		path: '/deepRoute',
		title: 'DeepRoute'
	}
];

/** @type {import('./$types').LayoutLoad} */
export function load() {
	// throw new Error('yikes');

	return {
		navs,
		layoutMessage: 'Layout message'
	};
}
