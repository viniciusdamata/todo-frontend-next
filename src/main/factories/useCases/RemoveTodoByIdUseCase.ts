import { RemoteRemoveTodoByIdUseCase } from "@/data";
import { REMOVE_TODO_BY_ID_URL } from "@/main/settings";
import { AxiosHttpDeleteClientFactory } from "../http/AxiosHttpDeleteClient";


export const removeTodoByIdUseCaseFactory = new RemoteRemoveTodoByIdUseCase(
  REMOVE_TODO_BY_ID_URL,
  AxiosHttpDeleteClientFactory()
);
