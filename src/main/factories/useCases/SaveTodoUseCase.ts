import { RemoteSaveTodoUseCase } from "@/data";
import { AxiosHttpPostClientFactory } from "../AxiosHttpPostClient";

const SAVE_TODO_URL = String(process.env.NEXT_PUBLIC_SAVE_TODO_URL);

export const saveTodoUseCaseFactory = new RemoteSaveTodoUseCase(
  AxiosHttpPostClientFactory(SAVE_TODO_URL)
);
