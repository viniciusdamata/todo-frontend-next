export namespace HTTPGet {
  export interface Params {
    query?: Record<string, any>;
    headers?: Record<string, any>;
  }

  export interface Client {
    get<R>(url: string, params?: Params): Promise<R>;
  }
}
