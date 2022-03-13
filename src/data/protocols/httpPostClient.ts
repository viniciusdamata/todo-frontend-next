export namespace HTTPPost {
  export interface Params<T> {
    query?: Record<string, string>;
    headers?: Record<string, string>;
    body: T;
  }

  export interface Client {
    post<T, R>(params?: Params<T>): Promise<R>;
  }
}
