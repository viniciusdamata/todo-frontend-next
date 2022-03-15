import { ListAllTodosUseCase, RemoveTodoByIdUseCase, SaveTodoUseCase } from "@/domain";
import { TodoForm, TodosList, Layout } from "@/presentation";

interface ITodosPageProps {
  listAllTodosUseCase: ListAllTodosUseCase;
  saveTodoUseCase: SaveTodoUseCase;
  removeTodoByIdUseCase: RemoveTodoByIdUseCase;
}
export const TodosPage = ({
  listAllTodosUseCase,
  saveTodoUseCase,
  removeTodoByIdUseCase,
}: ITodosPageProps) => {
  return (
    <>
      <Layout>
        <TodoForm saveTodoUseCase={saveTodoUseCase} />
        <TodosList
          saveTodoUseCase={saveTodoUseCase}
          listAllTodosUseCase={listAllTodosUseCase}
          removeTodoByIdUseCase={removeTodoByIdUseCase}
          archived={false}
        />
      </Layout>
    </>
  );
};
