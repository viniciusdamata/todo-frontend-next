export namespace HTTPPut {
    export interface Params<T> {
      query?: Record<string, string>;
      headers?: Record<string, string>;
      data: T;
    }
  
    export interface Client {
      put<T, R>(url:string, params?: Params<T>): Promise<R>;
    }
  }
  