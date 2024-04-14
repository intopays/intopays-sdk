import axios from "axios";
import { Body, DeleteRequest, GetRequest, HttpClient, Param, PostRequest } from "typewield";
import { Webhook } from "@/core/models/Webhook";
import { environment } from "@/infra/configs/environment";
import { IntopaysConstructor } from "@/app/Intopays";

const axiosInstance = axios.create({ baseURL: environment.development.HOST });

@HttpClient({ axiosInstance })
export class WebhookHttp {
  public constructor(config: IntopaysConstructor) {
    if (process.env.NODE_ENV != "test") {
      axiosInstance.defaults.headers.common.Authorization = config.token;
      axiosInstance.defaults.baseURL = environment[config.mode || "production"].HOST;
    }
  }

  @PostRequest("/v1/webhooks")
  public async create(@Body data: { endpoint: string }): Promise<{ data: Webhook }> {
    console.log(data);
    return null as any;
  }

  @GetRequest("/v1/webhooks")
  public async find(@Body data: { endpoint: string }): Promise<{ data: Webhook }> {
    console.log(data);
    return null as any;
  }

  @DeleteRequest("/v1/webhooks/:id")
  public async delete(@Param("id") webhookId: number): Promise<{ data: Webhook }> {
    console.log(webhookId);
    return null as any;
  }
}
