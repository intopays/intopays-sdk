/**
 * Enumeração que define os tipos de juros aplicáveis a boletos em caso de atraso.
 */
export enum InterestEnum {
  /**
   * Juros aplicados como um valor fixo por dia de atraso.
   */
  AMOUNT_PER_DAY = "AMOUNT_PER_DAY",

  /**
   * Juros aplicados com base em uma taxa percentual mensal.
   */
  MONTHLY_RATE = "MONTHLY_RATE",

  /**
   * Isento de juros; nenhum valor adicional será cobrado em caso de atraso.
   */
  EXEMPT = "EXEMPT"
}
