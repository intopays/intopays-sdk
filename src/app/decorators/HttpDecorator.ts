import { HttpClientOptions } from "@/domain/models/HttpMethod";
import { HttpAdapter } from "@/app/adapters/HttpAdapter";
import { Constructor } from "@/domain/models/Constructor";

export function HttpClient(httpClientOptions: HttpClientOptions): Function {
  return function<T extends Constructor>(target: T) {
    return class extends target {
      private readonly _httpClientOptions = httpClientOptions;
      constructor(...args: Array<any>) {
        super(...args);
      }
    };
  };
}

export function GetRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("GET", url, params, body, query, options, propertyKey);
  };
}

export function PostRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("POST", url, params, body, query, options, propertyKey);
  };
}

export function PutRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("PUT", url, params, body, query, options, propertyKey);
  };
}

export function DeleteRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("DELETE", url, params, body, query, options, propertyKey);
  };
}

export function HeadRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("HEAD", url, params, body, query, options, propertyKey);
  };
}

export function OptionsRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("OPTIONS", url, params, body, query, options, propertyKey);
  };
}

export function PatchRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("PATCH", url, params, body, query, options, propertyKey);
  };
}

export function PurgeRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("PURGE", url, params, body, query, options, propertyKey);
  };
}

export function LinkRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("LINK", url, params, body, query, options, propertyKey);
  };
}

export function UnlinkRequest(url: string, options?: any): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const params = target[propertyKey].params;
    const body = target[propertyKey].body;
    const query = target[propertyKey].query;
    descriptor.value = HttpAdapter.createHttpAdapter("UNLINK", url, params, body, query, options, propertyKey);
  };
}
