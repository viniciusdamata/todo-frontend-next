import { HTTPPost } from "@/data";
import { AxiosInstance } from "axios";

export class AxiosHttpPostClient implements HTTPPost.Client {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  public async post<T, R>(
    url: string,
    params?: HTTPPost.Params<T>
  ): Promise<R> {
    const response = await this.axiosInstance.post(url, params?.body, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
