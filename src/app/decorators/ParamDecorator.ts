export function Param(name: string): Function {
  return function(target: any, propertyKey: string | symbol, parameterIndex: number): void {
    target[propertyKey].params = target[propertyKey].params || {};
    target[propertyKey].params[name] = parameterIndex;
  };
}
