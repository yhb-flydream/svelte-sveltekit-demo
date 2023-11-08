import { error } from '@sveltejs/kit';

const base = 'https://api.xxx.com/api';

/**
 * @param {{
 *   method: string,
 *   path: string,
 *   data: any,
 *   token: string | number,
 * }} opts
 */
export default async function send({ method, path, data, token }) {
  /** @type any */
  const opts = { method, headers: {} };

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  if (token) {
    opts.headers['Authorization'] = `Token ${token}`;
  }

  const res = await fetch(`${base}/${path}`, opts);
  if (res.ok || res.status === 422) {
    const text = await res.text();
    return text ? JSON.parse(text) : {};
  }

  throw error(res.status);
}
