/** @type {import('./$types').PageLoad} */
export function load({ data }) {
  return {
    _title: 'Home Page',
    title: data.title,
  }
}
