import axios, { AxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

const tokenInterceptor = async (config: AxiosRequestConfig<any>) => {
  const session = await getSession();
  console.log(session);
  return {
    ...config,
    headers: { Authorization: `Bearer ${session?.idToken}` },
  };
};

const errorInterceptor = (error: any) => {
  console.log(error);
  Promise.reject(error);
};

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(tokenInterceptor, errorInterceptor);
export { axiosInstance };
