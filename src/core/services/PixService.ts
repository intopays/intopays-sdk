import { Pix } from "@/core/models/Pix";
import { PixRemote } from "@/infra/http/PixRemote";

export class PixService {
  public constructor(
    private readonly remote: PixRemote
  ) {}

  public async create(data: Pix): Promise<Pix> {
    const response = await this.remote.create(data);
    return response.data;
  }

  public async find(data?: Partial<Pix>): Promise<Array<Pix>> {
    const response = await this.remote.find(data);
    return (response.data as any).body;
  }

  public async findOne(PixId: number): Promise<Pix> {
    const response = await this.remote.findOne(PixId);
    return response.data;
  }
}
