import { HTTPDelete } from "@/data";
import { AxiosInstance } from "axios";

export class AxiosHttpDeleteClient implements HTTPDelete.Client {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  public async delete<R>(url: string, params?: HTTPDelete.Params): Promise<R> {
    const response = await this.axiosInstance.delete(url, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
