import React, { useEffect, useState } from "react";
import { ListAllTodosUseCase, Todo } from "@/domain";
import Layout from "@/presentation/components/Layout";
import { TodoCard } from "@/presentation/pages/TodosPage/components/TodoCard";

interface ITArchivedTodosPageProps {
  listAllTodosUseCase: ListAllTodosUseCase;
}
const TArchivedTodosPage = ({
  listAllTodosUseCase,
}: ITArchivedTodosPageProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { body } = await listAllTodosUseCase.execute();
      setTodos(body);
    })();
  }, [listAllTodosUseCase]);

  return (
    <>
      <Layout>
        <div className={styles["todo-list"]}>
          {todos.map((todo) => (
            <TodoCard {...todo} key={todo.title} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default TArchivedTodosPage;
