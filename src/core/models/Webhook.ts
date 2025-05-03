/**
 * Representa um webhook configurado para receber notificações de eventos.
 */
export class Webhook {
  public constructor(data?: Partial<Webhook>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  /**
   * Identificador único do webhook.
   */
  public id!: number;

  /**
   * URL de destino onde os eventos serão enviados via HTTP POST.
   */
  public endpoint!: string;

  /**
   * Assinatura secreta usada para validar a autenticidade das requisições recebidas.
   * Normalmente utilizada para verificar a integridade do payload no recebimento do webhook.
   */
  public signature!: string;
}
