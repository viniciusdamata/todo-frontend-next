import { RemoteFindTodoByIdUseCase } from "@/data";
import { FIND_TODO_BY_ID_URL } from "@/main/settings";
import { AxiosHttpGetClientFactory } from "../http/AxiosHttpGetClient";


export const findTodoByIdUseCaseFactory = new RemoteFindTodoByIdUseCase(
  FIND_TODO_BY_ID_URL,
  AxiosHttpGetClientFactory()
);
