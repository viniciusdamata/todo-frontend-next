import { RemoteListAllTodosUseCase } from "../../../data/useCases/RemoteListAllTodosUseCase";
import { AxiosHttpGetClientFactory } from "../AxiosHttpGetClient";

const LIST_ALL_TODOS_URL = String(process.env.NEXT_PUBLIC_LIST_ALL_TODOS_URL);

export const listAllTodosUseCaseFactory = new RemoteListAllTodosUseCase(
  AxiosHttpGetClientFactory(LIST_ALL_TODOS_URL)
);
