/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://pokemons-api.herokuapp.com/api';

type RequestMethod = 'GET' | 'POST' | 'PATCH';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(BASE_URL + url, options).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
};
