import axios from "axios";
import { Body, GetRequest, HttpClient, Param, PatchRequest, PostRequest, Query } from "typewield";
import { environment } from "@/infra/configs/environment";
import { Boleto, IntopaysConstructor } from "@/app/Intopays";
import { MessageResponse } from "@/infra/http/helpers/MessageResponse";

const axiosInstance = axios.create({ baseURL: environment.development.HOST });

@HttpClient({ axiosInstance })
export class BoletoRemote {
  public constructor(config: IntopaysConstructor) {
    axiosInstance.defaults.headers.common.Authorization = config.token;
    axiosInstance.defaults.baseURL = environment[config.mode || "production"].HOST;
  }

  @PostRequest("/v1/boletos")
  public async create(@Body data: Boleto): Promise<{ data: Boleto }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/boletos")
  public async search(@Query data?: Partial<Boleto>): Promise<{ data: Array<Boleto> }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/boletos/:id")
  public async find(@Param("id") id: number): Promise<{ data: Boleto }> {
    throw new Error("Method not implemented");
  }

  @PatchRequest("/v1/boletos/:id/cancel")
  public async void(@Param("id") id: number): Promise<MessageResponse> {
    throw new Error("Method not implemented");
  }
}
