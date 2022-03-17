import { RemoteSaveTodoUseCase } from "@/data";
import { TODO_API_URL } from "@/main/settings";
import { AxiosHttpPostClientFactory } from "../http/AxiosHttpPostClient";


export const saveTodoUseCaseFactory = new RemoteSaveTodoUseCase(
  TODO_API_URL,
  AxiosHttpPostClientFactory()
);
