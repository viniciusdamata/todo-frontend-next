import { HTTPPost } from "@/data";
import axios from "axios";
export class AxiosHttpPostClient implements HTTPPost.Client {
  constructor(private url: string) {}

  public async post<T, R>(params?: HTTPPost.Params<T>): Promise<R> {
    const response = await axios.post(this.url, params?.body, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
