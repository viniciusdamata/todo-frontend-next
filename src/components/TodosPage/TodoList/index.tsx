import React, { useEffect, useState } from "react";
import { ListAllTodosUseCase, Todo } from "../../../domain";
import Layout from "../../Layout";
import { TodoCard } from "../TodoCard";
interface ITodoListProps {
  listAllTodosUseCase: ListAllTodosUseCase;
}
const TodoList = ({ listAllTodosUseCase }: ITodoListProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await listAllTodosUseCase.execute();
      setTodos(data);
    })();
  }, [listAllTodosUseCase]);

  return (
    <>
      <Layout>
        {todos.map((todo) => (
          <TodoCard key={todo.title} {...todo} />
        ))}
      </Layout>
    </>
  );
};
export default TodoList;
