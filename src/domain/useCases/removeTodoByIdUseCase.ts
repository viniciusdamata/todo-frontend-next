import { UseCase } from "./useCase";
export namespace RemoveTodoByIdUseCase {
  export type Response = {
    error: string;
    body: string;
    statusCode: 200;
  };

  export type Params = { id: string };
}

export interface RemoveTodoByIdUseCase
  extends UseCase<
    RemoveTodoByIdUseCase.Params,
    RemoveTodoByIdUseCase.Response
  > {}
