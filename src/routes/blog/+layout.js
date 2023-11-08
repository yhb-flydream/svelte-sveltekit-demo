/** @interface Array  */
const navs = [
	{
		path: 'one',
		title: 'One Blog Page'
	},
	{
		path: 'two',
		title: 'Two Blog Page'
	},
	{
		path: 'three',
		title: 'Three Blog Page'
	}
];

/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		title: 'Blog Page',
		navs
	};
}
