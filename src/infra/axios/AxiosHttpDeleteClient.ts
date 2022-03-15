import { HTTPDelete } from "@/data";
import axios from "axios";
export class AxiosHttpDeleteClient implements HTTPDelete.Client {
  public async delete<R>(url: string, params?: HTTPDelete.Params): Promise<R> {
    const response = await axios.delete(url, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
