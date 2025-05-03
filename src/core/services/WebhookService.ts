import crypto from "crypto";
import { Webhook } from "@/core/models/Webhook";
import { WebhookRemote } from "@/infra/http/WebhookRemote";

/**
 * Serviço responsável pela lógica de negócios relacionada aos webhooks.
 */
export class WebhookService {
  /**
   * Construtor da classe WebhookService.
   * @param remote - Instância da classe WebhookRemote responsável pela comunicação com o servidor.
   */
  public constructor(
    private readonly remote: WebhookRemote
  ) {}

  /**
   * Cria um novo webhook no sistema.
   * @param data - Dados necessários para a criação do webhook, incluindo o endpoint.
   * @returns O objeto Webhook criado.
   */
  public async create(data: { endpoint: string }): Promise<Webhook> {
    const response = await this.remote.create(data);
    return response.data;
  }

  /**
   * Busca uma lista de webhooks com base no endpoint fornecido.
   * @param data - Dados para filtrar os webhooks (opcional), incluindo o endpoint.
   * @returns Lista de webhooks que atendem aos critérios fornecidos.
   */
  public async find(data?: { endpoint?: string | null }): Promise<Array<Webhook>> {
    const response = await this.remote.find(data);
    return response.data;
  }

  /**
   * Deleta um webhook específico pelo seu ID.
   * @param id - ID do webhook a ser deletado.
   * @returns O objeto Webhook deletado.
   */
  public async delete(id: number): Promise<Webhook> {
    const response = await this.remote.delete(id);
    return response.data;
  }

  /**
   * Verifica a assinatura de um payload recebido de um webhook.
   * @param payload - O payload que foi recebido pelo webhook.
   * @param xWebhookSignature - A assinatura fornecida pelo webhook.
   * @param signature - A chave secreta para verificar a assinatura.
   * @returns Retorna `true` se a assinatura for válida, caso contrário `false`.
   */
  public verifySignature(payload: any, xWebhookSignature: string, signature: string): boolean {
    const computedSignature = crypto.createHmac("sha256", signature).update(JSON.stringify(payload)).digest("hex");
    return xWebhookSignature == computedSignature;
  }
}
