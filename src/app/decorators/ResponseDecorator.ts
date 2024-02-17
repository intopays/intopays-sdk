export function Response(target: any, propertyKey: string | symbol, parameterIndex: number): void {
  target[propertyKey].response = target[propertyKey].response || {};
  target[propertyKey].response.index = parameterIndex;
}
