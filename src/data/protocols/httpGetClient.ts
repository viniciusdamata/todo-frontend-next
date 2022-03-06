export namespace HTTPGet {
  export interface Params {
    query?: Record<string, string>;
    headers?: Record<string, string>;
  }

  export interface Client {
    get<R>(params?: Params): Promise<R>;
  }
}
