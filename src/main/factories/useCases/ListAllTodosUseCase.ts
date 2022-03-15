import { RemoteListAllTodosUseCase } from "@/data";
import { LIST_ALL_TODOS_URL } from "@/main/settings";
import { AxiosHttpGetClientFactory } from "../http/AxiosHttpGetClient";


export const listAllTodosUseCaseFactory = new RemoteListAllTodosUseCase(
  LIST_ALL_TODOS_URL,
  AxiosHttpGetClientFactory()
);
