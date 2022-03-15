import { Todo } from "..";
import { UseCase } from "./useCase";

export namespace SaveTodoUseCase {
  export type Response = {
    error: string;
    body: string;
    statusCode: 200;
  };

  export type Params = Partial<Todo>;
}

export interface SaveTodoUseCase
  extends UseCase<SaveTodoUseCase.Params, SaveTodoUseCase.Response> {}
