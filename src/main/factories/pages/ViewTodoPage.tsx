import { ViewTodo } from "@/presentation";
import { findTodoByIdUseCaseFactory } from "../useCases/findTodoByIdUseCase";
import { removeTodoByIdUseCaseFactory } from "../useCases/RemoveTodoByIdUseCase";
import { saveTodoUseCaseFactory } from "../useCases/SaveTodoUseCase";

export const ViewTodoPageFactory = () => {
  return (
    <ViewTodo
      findTodoByIdUseCase={findTodoByIdUseCaseFactory}
      removeTodoByIdUseCase={removeTodoByIdUseCaseFactory}
      saveTodoUseCase={saveTodoUseCaseFactory}
    />
  );
};
