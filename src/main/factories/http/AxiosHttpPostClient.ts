import { AxiosHttpPostClient, axiosInstance } from "@/infra";

export const AxiosHttpPostClientFactory = () =>
  new AxiosHttpPostClient(axiosInstance);
