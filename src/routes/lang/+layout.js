/** @interface Array */
const langs = [
  {
    path: 'en',
    title: 'English'
  },
  {
    path: 'ge',
    title: 'German'
  },
  {
    path: 'fr',
    title: 'French'
  }
];

/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
    title: 'Lang Page',
    langs
  };
}
