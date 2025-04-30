import { PixInfo } from "@/core/models/PixInfo";
import { IntegrationEnum } from "@/core/enums/IntegrationEnum";
import { PixTransactionStatus } from "@/core/enums/PixTransactionStatus";

export class Pix {
  // request
  public calendarExpiration!: number;
  public debtorName!: string;
  public debtorDocument!: string;
  public amountOriginal!: string;
  public amountModificationType!: number;
  public payerRequest!: string;
  public additionalInfos: Array<PixInfo>;
  public integrationType: IntegrationEnum;

  // response
  public id?: number;
  public pixKey?: string;
  public status?: PixTransactionStatus;
  public revision?: number;
  public locId?: number;
  public locLocation?: string;
  public locType?: string;
  public location?: string;
  public transactionId?: string;
}
