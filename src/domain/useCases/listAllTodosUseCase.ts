import { Todo } from "..";
import { UseCase } from "./useCase";
export namespace ListAllTodosUseCase {
  export type Response = {
    error: string;
    body: Todo[];
    statusCode: 200;
  }
}

export interface ListAllTodosUseCase
  extends UseCase<{}, ListAllTodosUseCase.Response> {}
