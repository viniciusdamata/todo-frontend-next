import { HTTPGet } from "@/data";
import { AxiosInstance } from "axios";

export class AxiosHttpGetClient implements HTTPGet.Client {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  public async get<R>(url: string, params?: HTTPGet.Params): Promise<R> {
    const response = await this.axiosInstance.get(url, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
