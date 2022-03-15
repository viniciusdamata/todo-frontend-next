export namespace HTTPDelete {
  export interface Params {
    query?: Record<string, string>;
    headers?: Record<string, string>;
  }

  export interface Client {
    delete<R>(url: string, params?: Params): Promise<R>;
  }
}
