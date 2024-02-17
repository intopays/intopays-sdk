
export function Body(target: any, propertyKey: string | symbol, parameterIndex: number): void {
  target[propertyKey].body = target[propertyKey].body || {};
  target[propertyKey].body.index = parameterIndex;
}
