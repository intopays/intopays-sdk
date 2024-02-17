import { HttpRequest, HttpResponse } from "@/domain/models/HttpMethod";

export interface HttpClient {
  send(request: HttpRequest): Promise<HttpResponse<any>>
}
