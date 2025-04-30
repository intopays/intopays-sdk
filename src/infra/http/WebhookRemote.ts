import axios from "axios";
import { Body, DeleteRequest, GetRequest, HttpClient, Param, PostRequest, Query } from "typewield";
import { Webhook } from "@/core/models/Webhook";
import { environment } from "@/infra/configs/environment";
import { IntopaysConstructor } from "@/app/Intopays";

const axiosInstance = axios.create({ baseURL: environment.development.HOST });

@HttpClient({ axiosInstance })
export class WebhookRemote {
  public constructor(config: IntopaysConstructor) {
    axiosInstance.defaults.headers.common.Authorization = config.token;
    axiosInstance.defaults.baseURL = environment[config.mode || "production"].HOST;
  }

  @PostRequest("/v1/webhooks")
  public async create(@Body data: { endpoint: string }): Promise<{ data: Webhook }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/webhooks")
  public async find(@Query data?: { endpoint?: string | null }): Promise<{ data: Array<Webhook> }> {
    throw new Error("Method not implemented");
  }

  @DeleteRequest("/v1/webhooks/:id")
  public async delete(@Param("id") webhookId: number): Promise<{ data: Webhook }> {
    throw new Error("Method not implemented");
  }
}
