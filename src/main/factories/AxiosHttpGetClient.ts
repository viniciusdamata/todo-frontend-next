import { AxiosHttpGetClient } from "@/infra/AxiosHttpGetClient";

export const AxiosHttpGetClientFactory = (url: string) => new AxiosHttpGetClient(url);
