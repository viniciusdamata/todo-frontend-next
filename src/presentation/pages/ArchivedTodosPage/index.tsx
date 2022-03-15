import { ListAllTodosUseCase, RemoveTodoByIdUseCase, SaveTodoUseCase, Todo } from "@/domain";
import { TodosList, Layout } from "@/presentation";

interface ITArchivedTodosPageProps {
  listAllTodosUseCase: ListAllTodosUseCase;
  saveTodoUseCase: SaveTodoUseCase;
  removeTodoByIdUseCase: RemoveTodoByIdUseCase;
}
export const ArchivedTodosPage = ({
  listAllTodosUseCase,
  saveTodoUseCase,
  removeTodoByIdUseCase,
}: ITArchivedTodosPageProps) => {
  return (
    <>
      <Layout>
        <TodosList
          saveTodoUseCase={saveTodoUseCase}
          listAllTodosUseCase={listAllTodosUseCase}
          archived={true}
          removeTodoByIdUseCase={removeTodoByIdUseCase}
        />
      </Layout>
    </>
  );
};
