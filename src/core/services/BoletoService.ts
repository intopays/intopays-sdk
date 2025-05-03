import { BoletoRemote } from "@/infra/http/BoletoRemote";
import { Boleto } from "@/core/models/Boleto";

/**
 * Serviço responsável pela lógica de negócios relacionada aos boletos.
 */
export class BoletoService {
  /**
   * Construtor da classe BoletoService.
   * @param remote - Instância da classe BoletoRemote responsável pela comunicação com o servidor.
   */
  public constructor(
    private readonly remote: BoletoRemote
  ) {}

  /**
   * Cria um novo boleto no sistema.
   * @param data - Dados necessários para a criação do boleto.
   * @returns O objeto Boleto criado.
   */
  public async create(data: Boleto): Promise<Boleto> {
    const response = await this.remote.create(data);
    return response.data;
  }

  /**
   * Busca uma lista de boletos com base em dados de filtro fornecidos.
   * @param data - Dados para filtrar os boletos (opcional).
   * @returns Lista de boletos que atendem aos critérios fornecidos.
   */
  public async search(data?: Partial<Boleto>): Promise<Array<Boleto>> {
    const response = await this.remote.search(data);
    return response.data.body;
  }

  /**
   * Encontra um boleto específico pelo seu ID.
   * @param id - ID do boleto a ser buscado.
   * @returns O objeto Boleto encontrado.
   */
  public async find(id: number): Promise<Boleto> {
    const response = await this.remote.find(id);
    return response.data;
  }

  /**
   * Anula um boleto específico.
   * @param id - ID do boleto a ser anulado.
   * @returns Retorna um booleano indicando o sucesso ou falha da operação.
   */
  public async void(id: number | string): Promise<boolean> {
    const response = await this.remote.void(id);
    return Boolean(response.data);
  }
}
