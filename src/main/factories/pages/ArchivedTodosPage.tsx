import { ArchivedTodosPage } from "@/presentation";
import { listAllTodosUseCaseFactory } from "../useCases/ListAllTodosUseCase";
import { removeTodoByIdUseCaseFactory } from "../useCases/RemoveTodoByIdUseCase";
import { saveTodoUseCaseFactory } from "../useCases/SaveTodoUseCase";

export const ArchivedTodosPageFactory = () => {
  return (
    <ArchivedTodosPage
      listAllTodosUseCase={listAllTodosUseCaseFactory}
      removeTodoByIdUseCase={removeTodoByIdUseCaseFactory}
      saveTodoUseCase={saveTodoUseCaseFactory}
    />
  );
};
