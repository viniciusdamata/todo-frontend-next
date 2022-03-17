import { RemoteListAllTodosUseCase } from "@/data";
import { TODO_API_URL } from "@/main/settings";
import { AxiosHttpGetClientFactory } from "../http/AxiosHttpGetClient";


export const listAllTodosUseCaseFactory = new RemoteListAllTodosUseCase(
  TODO_API_URL,
  AxiosHttpGetClientFactory()
);
