import { HttpClient } from "@/domain/use-cases/HttpClient";
import { HttpRequest, HttpResponse } from "@/domain/models/HttpMethod";

type AxiosApp = any
export class HttpAxiosImpl implements HttpClient {
  private readonly http: AxiosApp;

  constructor(http: AxiosApp) {
    this.http = http;
  }

  public async send(request: HttpRequest): Promise<HttpResponse<any>> {
    return this.http(request).then(response => ({ statusCode: response.status, data: response.data }));
  }
}
