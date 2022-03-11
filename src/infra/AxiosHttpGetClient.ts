import { HTTPGet } from "@/data/protocols/httpGetClient";
import axios from "axios";
export class AxiosHttpGetClient implements HTTPGet.Client {
  constructor(private url: string) {}

  public async get<R>(params?: HTTPGet.Params): Promise<R> {
    const response = await axios.get(this.url, {
      headers: params?.headers,
      params: params?.query,
    });

    return response.data.body;
  }
}
