import { RemoteFindTodoByIdUseCase } from "@/data";
import { TODO_API_URL } from "@/main/settings";
import { AxiosHttpGetClientFactory } from "../http/AxiosHttpGetClient";


export const findTodoByIdUseCaseFactory = new RemoteFindTodoByIdUseCase(
  TODO_API_URL,
  AxiosHttpGetClientFactory()
);
