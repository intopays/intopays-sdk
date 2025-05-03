import { Pix } from "@/core/models/Pix";
import { PixRemote } from "@/infra/http/PixRemote";

/**
 * Serviço responsável pela lógica de negócios relacionada ao Pix.
 */
export class PixService {
  /**
   * Construtor da classe PixService.
   * @param remote - Instância da classe PixRemote responsável pela comunicação com o servidor.
   */
  public constructor(
    private readonly remote: PixRemote
  ) {}

  /**
   * Cria um novo objeto Pix no sistema.
   * @param data - Dados necessários para a criação do Pix.
   * @returns A resposta da criação do Pix com os dados do objeto Pix criado.
   */
  public async create(data: Pix): Promise<Pix> {
    const response = await this.remote.create(data);
    return response.data;
  }

  /**
   * Busca uma lista de objetos Pix com base nos dados fornecidos.
   * @param data - Dados parciais de Pix para realizar a busca (opcional).
   * @returns Lista de objetos Pix que atendem aos critérios fornecidos.
   */
  public async search(data?: Partial<Pix>): Promise<Array<Pix>> {
    const response = await this.remote.search(data);
    return response.data.body;
  }

  /**
   * Encontra um objeto Pix específico pelo seu ID.
   * @param id - ID do Pix a ser encontrado.
   * @returns O objeto Pix encontrado.
   */
  public async find(id: number): Promise<Pix> {
    const response = await this.remote.find(id);
    return response.data;
  }
}
