import { AxiosHttpGetClient, axiosInstance } from "@/infra";

export const AxiosHttpGetClientFactory = () =>
  new AxiosHttpGetClient(axiosInstance);
