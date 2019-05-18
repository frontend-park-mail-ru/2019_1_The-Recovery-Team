import { HTTPMethods } from './config';

export interface RespResult {
  response: null | Object;
  error: null | Object;
}

export default class Requester {
  private static createBody(
    data: Object = {},
    multipart: boolean = false
  ): FormData | string {
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

  private static async doRequest(
    url: string,
    method: HTTPMethods,
    data: string | FormData | null = null,
    multipartFormData: boolean = false
  ): Promise<RespResult> {
    const headers = {};

    if (
      !multipartFormData &&
      (method === HTTPMethods.POST || method === HTTPMethods.PUT)
    ) {
      headers['Content-Type'] = 'application/json';
    }

    const options: RequestInit = {
      method,
      headers,
      credentials: 'include',
      mode: 'cors',
    };
    if (data) {
      options.body = data;
    }
    try {
      const r = await fetch(url, options);

      if (!r.ok) {
        return {
          error: r,
          response: null,
        };
      }

      const contentLength = r.headers.get('Content-Length');
      const response =
        contentLength === '0' || !contentLength ? {} : await r.json();

      return {
        response,
        error: null,
      };
    } catch (e) {
      return {
        error: e,
        response: null,
      };
    }
  }

  static post(url: string, data: Object = {}, multipart: boolean = false) {
    return Requester.doRequest(
      url,
      HTTPMethods.POST,
      Requester.createBody(data, multipart),
      multipart
    );
  }

  static get(url: string, data: Object = {}) {
    let query = Object.entries(data)
      .filter(([key, value]) => !!value || value === 0)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    if (query.length) {
      query = `?${query}`;
    }

    return Requester.doRequest(`${url}${query}`, HTTPMethods.GET);
  }

  static put(url: string, data: Object = {}, multipart: boolean = false) {
    return Requester.doRequest(
      url,
      HTTPMethods.PUT,
      Requester.createBody(data, multipart),
      multipart
    );
  }

  static delete(url: string) {
    return Requester.doRequest(url, HTTPMethods.DELETE);
  }
}
