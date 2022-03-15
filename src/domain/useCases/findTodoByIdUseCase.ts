import { Todo } from "..";
import { UseCase } from "./useCase";
export namespace FindTodoByIdUseCase {
  export type Response = {
    error: string;
    body: Todo;
    statusCode: 200;
  };

  export type Params = { id: string };
}

export interface FindTodoByIdUseCase
  extends UseCase<FindTodoByIdUseCase.Params, FindTodoByIdUseCase.Response> {}
