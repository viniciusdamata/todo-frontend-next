import { HTTPPost } from "@/data";
import axios from "axios";
export class AxiosHttpPostClient implements HTTPPost.Client {
  public async post<T, R>(
    url: string,
    params?: HTTPPost.Params<T>
  ): Promise<R> {
    const response = await axios.post(url, params?.body, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
