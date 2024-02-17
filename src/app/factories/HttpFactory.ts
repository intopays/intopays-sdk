import { HttpService } from "@/domain/services/HttpService";
import { HttpFetchImpl } from "@/infra/http/HttpFetchImpl";
import { HttpUseCase } from "@/domain/use-cases/HttpUseCase";
import { HttpAxiosImpl } from "@/infra/http/HttpAxiosImpl";
import { HttpClientOptions } from "@/domain/models/HttpMethod";

export class HttpFactory {
  public static createHttpRequest(httpClientOptions: HttpClientOptions): HttpUseCase {
    const httpClient = new HttpFetchImpl();
    const axiosApp = httpClientOptions.axiosInstance;
    const httpAxios = new HttpAxiosImpl(axiosApp);
    return new HttpService(httpClientOptions, axiosApp ? httpAxios : httpClient);
  }
}
