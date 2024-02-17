export type Method = | "get" | "GET"
| "delete" | "DELETE"
| "head" | "HEAD"
| "options" | "OPTIONS"
| "post" | "POST"
| "put" | "PUT"
| "patch" | "PATCH"
| "purge" | "PURGE"
| "link" | "LINK"
| "unlink" | "UNLINK"

export type HttpRequest = {
  headers?: any
  url: string
  params?: any
  method?: Method
  data?: any
}

export type HttpResponse<T> = {
  statusCode: number
  data?: T
}

type Headers = Record<string, string | Array<string> | number | boolean | null>

export type HttpClientOptions = {
  baseURL?: string
  headers?: Headers
  logger?: boolean
  axiosInstance?: any
}
