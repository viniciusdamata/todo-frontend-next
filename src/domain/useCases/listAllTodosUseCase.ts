import { Todo } from "..";
import { UseCase } from "./useCase";

export interface ListAllTodosUseCase extends UseCase<{}, Todo[]> {}
