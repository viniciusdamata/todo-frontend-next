import {
  ListAllTodosUseCase,
  RemoveTodoByIdUseCase,
  SaveTodoUseCase,
  Todo,
} from "@/domain";
import { useCallback, useEffect, useState } from "react";
import { TodoCard } from "../TodoCard";
import styles from "./todosList.module.scss";

interface ITodosListProps {
  saveTodoUseCase: SaveTodoUseCase;
  listAllTodosUseCase: ListAllTodosUseCase;
  removeTodoByIdUseCase: RemoveTodoByIdUseCase;
  archived: boolean;
}
export const TodosList = ({
  saveTodoUseCase,
  listAllTodosUseCase,
  removeTodoByIdUseCase,
  archived,
}: ITodosListProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { body } = await listAllTodosUseCase.execute({ archived });
      console.log(body)
      setTodos(body);
    })();
  }, [archived, listAllTodosUseCase]);

  const handleArchive = useCallback(
    async (todo: Todo) => {
      await saveTodoUseCase.execute({ ...todo, archived: !archived });
      setTodos((oldTodos) =>
        oldTodos.filter((item) => item.title !== todo.title)
      );
    },
    [archived, saveTodoUseCase]
  );

  const handleDelete = useCallback(
    async (title: string) => {
      await removeTodoByIdUseCase.execute({ id: title });
      setTodos((oldTodos) => oldTodos.filter((item) => item.title !== title));
    },
    [removeTodoByIdUseCase]
  );

  return (
    <>
      <div className={styles["todo-list"]}>
        {todos?.map((todo) => (
          <TodoCard
            todo={todo}
            key={todo.title}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};
