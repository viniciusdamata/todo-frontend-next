import React, { useEffect, useState } from "react";
import { ListAllTodosUseCase, SaveTodoUseCase, Todo } from "@/domain";
import Layout from "@/presentation/components/Layout";
import { TodoCard } from "./components/TodoCard";
import styles from "./todosPage.module.scss";
import TodoForm from "./components/TodoForm";

interface ITodosPageProps {
  listAllTodosUseCase: ListAllTodosUseCase;
  saveTodoUseCase: SaveTodoUseCase;
}
const TodosPage = ({
  listAllTodosUseCase,
  saveTodoUseCase,
}: ITodosPageProps) => {
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
        <TodoForm saveTodoUseCase={saveTodoUseCase} />
        <div className={styles["todo-list"]}>
          {todos.map((todo) => (
            <TodoCard {...todo} key={todo.title} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default TodosPage;
