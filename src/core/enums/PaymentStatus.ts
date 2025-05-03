/**
 * Enumeração que define os status de pagamento de um boleto.
 */
export enum PaymentStatus {
  /**
   * O boleto expirou e não pode mais ser pago.
   */
  EXPIRED = "EXPIRED",

  /**
   * O boleto está vencido e ainda não foi pago.
   */
  OVERDUE = "OVERDUE",

  /**
   * O boleto está aberto, aguardando pagamento.
   */
  OPEN = "OPEN",

  /**
   * O boleto foi pago com sucesso.
   */
  PAID = "PAID",

  /**
   * O boleto foi cancelado, não pode ser pago.
   */
  CANCELLED = "CANCELLED",

  /**
   * O pagamento está sendo processado.
   */
  PROCESSING = "PROCESSING",
}
