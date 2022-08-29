import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

const tokenInterceptor = async (config: AxiosRequestConfig<any>) => {
  const session = await getSession();
  return {
    ...config,
    headers: { Authorization: `Bearer ${session?.idToken}` },
  };
};

const errorInterceptor = (error: any) => {
  console.error(error);
  Promise.reject(error);
};

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(tokenInterceptor, errorInterceptor);
export { axiosInstance };
