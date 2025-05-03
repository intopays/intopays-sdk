/**
 * Enumeração que define os tipos de multa aplicáveis a boletos em caso de atraso no pagamento.
 */
export enum FineTypeEnum {
  /**
   * Nenhuma multa será aplicada após o vencimento.
   */
  NO_FINE = "NO_FINE",

  /**
   * Um valor fixo será cobrado como multa após o vencimento.
   */
  AMOUNT = "AMOUNT",

  /**
   * Um percentual do valor do boleto será cobrado como multa após o vencimento.
   */
  PERCENT = "PERCENT"
}
