import { TodosPage } from "@/presentation";
import { listAllTodosUseCaseFactory } from "../useCases/ListAllTodosUseCase";
import { removeTodoByIdUseCaseFactory } from "../useCases/RemoveTodoByIdUseCase";
import { saveTodoUseCaseFactory } from "../useCases/SaveTodoUseCase";

export const TodosPageFactory = () => {
  return (
    <TodosPage
      listAllTodosUseCase={listAllTodosUseCaseFactory}
      saveTodoUseCase={saveTodoUseCaseFactory}
      removeTodoByIdUseCase={removeTodoByIdUseCaseFactory}
    />
  );
};
