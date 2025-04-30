import { IntopaysConstructor } from "../Intopays";
import { PixService } from "@/core/services/PixService";
import { PixRemote } from "@/infra/http/PixRemote";

export class PixFactory {
  public static createPixService(config: IntopaysConstructor): PixService {
    return new PixService(new PixRemote(config));
  }
}
