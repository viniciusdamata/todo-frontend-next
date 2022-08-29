import {
  ListAllTodosUseCase,
  RemoveTodoByIdUseCase,
  SaveTodoUseCase,
  Todo,
} from "@/domain";
import autoAnimate from "@formkit/auto-animate";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    (async () => {
      const { body } = await listAllTodosUseCase.execute({ archived });
      setTodos(body);
      setLoading(false);
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

  if (loading) {
    return <div className={styles["todo-list-empty"]} ref={parent}>Carregando...</div>;
  }

  if (todos?.length === 0) {
    return (
      <div className={styles["todo-list-empty"]} ref={parent}>
        <h1>Nenhuma Nota Disponivel</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles["todo-list"]} ref={parent}>
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
