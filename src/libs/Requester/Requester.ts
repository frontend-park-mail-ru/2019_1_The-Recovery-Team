import { HTTPMethods } from './config';

export interface RespResult {
  response: null | Object;
  error: null | Object;
}

export default class Requester {
  private static createBody(data: Object = {}, multipart: boolean = false): FormData | string {
    if (multipart) {
      const body = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (!!value || value === 0) {
          body.append(key, value);
        }
      });
      return body;
    }

    return JSON.stringify(data);
  }

  private static doRequest(
      url: string,
      method: HTTPMethods,
      data: string | FormData | null = null,
      multipartFormData: boolean = false,
  ): Promise<RespResult> {
    const headers = {};

    if (multipartFormData) {
      headers['Content-Type'] = 'multipart/form-data';
    }
    else if (method === HTTPMethods.POST || method === HTTPMethods.PUT) {
      headers['Content-Type'] = 'application/json';
    }

    const options: RequestInit = {
      method,
      headers,
      credentials: 'include',
    };
    if (data) {
      options.body = data;
    }

    return fetch(url, options)
        .then((r: Response) => r.ok ? r : Promise.reject(r))
        .then((r: Response) => r.json())
        .then((response: Response) => {
          return {
            response,
            error: null,
          };
        })
        .catch((error) => {
          console.log('error', error);
          return {
            response: null,
            error,
          };
        });
  }

  static post(url: string, data: Object = {}, multipart: boolean = false) {
    return Requester.doRequest(
        url,
        HTTPMethods.POST,
        Requester.createBody(data, multipart),
        multipart);
  }

  static get(url: string, data: Object = {}) {
    const query = Object.entries(data)
        .filter(([key, value]) => !!value || value === 0)
        .map(([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');

    return Requester.doRequest(`${url}?${query}`, HTTPMethods.GET);
  }

  static put(url: string, data: Object = {}, multipart: boolean = false) {
    return Requester.doRequest(
        url,
        HTTPMethods.PUT,
        Requester.createBody(data, multipart),
        multipart,
    );
  }

  static delete(url: string) {
    return Requester.doRequest(url, HTTPMethods.DELETE);
  }
}
