import { HttpClient } from "@/domain/use-cases/HttpClient";
import { HttpRequest, HttpResponse } from "@/domain/models/HttpMethod";

export class HttpFetchImpl implements HttpClient {
  public async send(request: HttpRequest): Promise<HttpResponse<any>> {
    const { method, headers, data, params, url } = request;
    const endpoint = params ? url + "?" + new URLSearchParams(params) : url;
    return await fetch(endpoint, { method, headers, body: JSON.stringify(data) })
      .then(async response => ({ statusCode: response.status, data: await response.json() }));
  }
}
