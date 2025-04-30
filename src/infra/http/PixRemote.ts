import axios from "axios";
import { Body, GetRequest, HttpClient, Param, PostRequest, Query } from "typewield";
import { environment } from "@/infra/configs/environment";
import { IntopaysConstructor } from "@/app/Intopays";
import { Pix } from "@/core/models/Pix";

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
  public async find(@Query data?: Partial<Pix>): Promise<{ data: Array<Pix> }> {
    throw new Error("Method not implemented");
  }

  @GetRequest("/v1/pixs/:id")
  public async findOne(@Param("id") id: number): Promise<{ data: Pix }> {
    throw new Error("Method not implemented");
  }
}
