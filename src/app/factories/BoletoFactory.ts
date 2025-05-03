import { IntopaysConstructor } from "../Intopays";
import { BoletoService } from "@/core/services/BoletoService";
import { BoletoRemote } from "@/infra/http/BoletoRemote";

export class BoletoFactory {
  public static createBoletoService(config: IntopaysConstructor): BoletoService {
    return new BoletoService(new BoletoRemote(config));
  }
}
