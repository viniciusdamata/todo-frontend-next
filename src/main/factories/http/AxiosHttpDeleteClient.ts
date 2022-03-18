import { AxiosHttpDeleteClient, axiosInstance } from "@/infra";

export const AxiosHttpDeleteClientFactory = () =>
  new AxiosHttpDeleteClient(axiosInstance);
