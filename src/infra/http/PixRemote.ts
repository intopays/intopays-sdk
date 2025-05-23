import axios from "axios";
import { Body, GetRequest, HttpClient, Param, PostRequest, Query } from "typewield";
import { environment } from "@/infra/configs/environment";
import { IntopaysConstructor } from "@/app/Intopays";
import { Pix } from "@/core/models/Pix";
import { PageResponse } from "@/infra/http/helpers/PageResponse";

const axiosInstance = axios.create({ baseURL: environment.development.HOST });

@HttpClient({ axiosInstance })
export class PixRemote {
  public constructor(config: IntopaysConstructor) {
    axiosInstance.defaults.headers.common.Authorization = config.token;
    axiosInstance.defaults.baseURL = environment[config.mode || "production"].HOST;
  }

  @PostRequest("/v1/pixs")
  public async create(@Body data: Pix): Promise<{ data: Pix }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/pixs")
  public async search(@Query data?: Partial<Pix>): Promise<{ data: PageResponse<Pix> }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/pixs/:id")
  public async find(@Param("id") id: number | string): Promise<{ data: Pix }> {
    throw new Error("Method not implemented");
  }
}
