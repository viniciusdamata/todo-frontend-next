import React, { useEffect, useState } from "react";
import { ListAllTodosUseCase, Todo } from "../../../domain";
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

  return <>
      <div>
      {todos.map((todo) => (
        <TodoCard key={todo.title} {...todo} />
      ))}
    </div>
  </>;
};
export default TodoList;
