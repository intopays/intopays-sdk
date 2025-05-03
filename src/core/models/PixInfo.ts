
/**
 * Representa uma informação adicional incluída na cobrança Pix.
 * Essas informações aparecem no comprovante de pagamento.
 *
 * Exemplo: instruções, número do pedido, referência, etc.
 */
export class PixInfo {
  public constructor(data?: Partial<PixInfo>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  /**
   * Nome da informação (ex: "Pedido", "Referência").
   * Máximo de 50 caracteres.
   */
  public name!: string;

  /**
   * Valor da informação (ex: "12345", "PIX2025").
   * Máximo de 200 caracteres.
   */
  public value!: string;
}
