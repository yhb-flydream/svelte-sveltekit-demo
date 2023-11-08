/** @interface Array */
const words = ['how', 'deep', 'does', 'the', 'rabbit', 'hole', 'go'];

export function load({ params }) {
	// console.log('params :>> ', params);

	let depth = params.path.split('/').filter(Boolean).length;
	let next =
		depth === words.length ? '/deepRoute' : `/deepRoute/${words.slice(0, depth + 1).join('/')}`;
	return {
		words,
		depth,
		next
	};
}
