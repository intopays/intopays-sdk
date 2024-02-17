import { HttpRequest } from "@/domain/models/HttpMethod";

export interface HttpUseCase {
  send(request: HttpRequest, functionName: string): Promise<any>
}
