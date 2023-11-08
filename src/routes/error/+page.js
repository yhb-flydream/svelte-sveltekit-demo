/** @interface Array */
const navs = [
	{
		path: 'expected',
		title: 'This error was expected'
	},
	{
		path: 'unexpected',
		title: 'This error was unexpected'
	}
];

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		title: 'Error Page',
		navs
	};
}
