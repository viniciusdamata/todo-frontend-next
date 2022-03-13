import TodosPage from "@/presentation/pages/TodosPage";
import { listAllTodosUseCaseFactory } from "../useCases/ListAllTodosUseCase";
import { saveTodoUseCaseFactory } from "../useCases/SaveTodoUseCase";

export const TodosPageFactory = () => {
  return <TodosPage listAllTodosUseCase={listAllTodosUseCaseFactory} saveTodoUseCase={saveTodoUseCaseFactory} />;
};
