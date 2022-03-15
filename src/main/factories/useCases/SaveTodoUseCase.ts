import { RemoteSaveTodoUseCase } from "@/data";
import { SAVE_TODO_URL } from "@/main/settings";
import { AxiosHttpPostClientFactory } from "../http/AxiosHttpPostClient";


export const saveTodoUseCaseFactory = new RemoteSaveTodoUseCase(
  SAVE_TODO_URL,
  AxiosHttpPostClientFactory()
);
