import { HTTPGet } from "@/data";
import axios from "axios";
export class AxiosHttpGetClient implements HTTPGet.Client {
  public async get<R>(url: string, params?: HTTPGet.Params): Promise<R> {
    const response = await axios.get(url, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data;
  }
}
