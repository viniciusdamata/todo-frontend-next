import { RemoteRemoveTodoByIdUseCase } from "@/data";
import { TODO_API_URL } from "@/main/settings";
import { AxiosHttpDeleteClientFactory } from "../http/AxiosHttpDeleteClient";


export const removeTodoByIdUseCaseFactory = new RemoteRemoveTodoByIdUseCase(
  TODO_API_URL,
  AxiosHttpDeleteClientFactory()
);
