import { Method } from "@/domain/models/HttpMethod";
import { HttpFactory } from "@/app/factories/HttpFactory";

export class HttpAdapter {
  public static createHttpAdapter(method: Method, url: string, params: any, body: any, query: any, options: any, functionName: string): Function {
    return async function(...args: Array<any>) {
      const paramsMatch = url.match(/\/:(\w+)/g) || [];
      const values = paramsMatch.map((param: string) => "/" + args[params[param.slice(2)]]);
      const data = args[body?.index];
      const queries = args[query?.index];

      let parseUrl = url;
      paramsMatch.forEach((param, index) => {
        parseUrl = parseUrl.replace(param, values[index].toString());
      });

      const httpRequest = HttpFactory.createHttpRequest(this._httpClientOptions);
      return await httpRequest.send({ method, url: parseUrl, data, params: queries, headers: options }, functionName);
    };
  }
}
