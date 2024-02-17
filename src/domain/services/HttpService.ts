import { HttpClient } from "@/domain/use-cases/HttpClient";
import { HttpClientOptions, HttpRequest } from "@/domain/models/HttpMethod";
import { HttpUseCase } from "@/domain/use-cases/HttpUseCase";

export class HttpService implements HttpUseCase {
  constructor(
    private readonly httpClientOptions: HttpClientOptions,
    private readonly http: HttpClient
  ) { }

  public async send(request: HttpRequest, functionName: string): Promise<any> {
    let baseURL = request.url.trim();
    if (!request.url.startsWith("http")) {
      baseURL = this.httpClientOptions.baseURL || this.httpClientOptions?.axiosInstance.defaults.baseURL;
      baseURL += request.url;
    }
    request.url = baseURL;
    return await this.http.send(request);
  }
}
