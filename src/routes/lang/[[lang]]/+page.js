/** @type {Object|any} */
const greetings = {
  en: 'hello!',
  ge: 'hallo!',
  fr: 'bonjour!'
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  /** @type any */
  const { langs } = await parent();
  return {
    greeting: greetings[params.lang ?? 'en'],
    lang: langs.find((/** @type {{ path: string; }} */ it) => it.path == (params.lang ?? 'en'))
      .title
  };
}
