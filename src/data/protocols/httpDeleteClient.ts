export namespace HTTPDelete {
  export interface Params {
    query?: Record<string, string>;
    headers?: Record<string, string>;
  }

  export interface Client {
    delete<T, R>(params?: Params): Promise<R>;
  }
}
