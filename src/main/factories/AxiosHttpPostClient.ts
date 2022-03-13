import { AxiosHttpPostClient } from "@/infra";

export const AxiosHttpPostClientFactory = (url: string) =>
  new AxiosHttpPostClient(url);
