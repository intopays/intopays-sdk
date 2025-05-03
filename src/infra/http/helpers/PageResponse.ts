export class PageResponse<T> {
  public pageNumber: number;
  public pageSize: number;
  public total: number;
  public body: Array<T> = [];
}
