import {
  FindTodoByIdUseCase,
  RemoveTodoByIdUseCase,
  SaveTodoUseCase,
  Todo,
} from "@/domain";
import { Layout } from "@/presentation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import tinycolor from "tinycolor2";
import styles from "./viewTodoPage.module.scss";

interface IViewTodoProps {
  findTodoByIdUseCase: FindTodoByIdUseCase;
  removeTodoByIdUseCase: RemoveTodoByIdUseCase;
  saveTodoUseCase: SaveTodoUseCase;
}
export const ViewTodo = ({
  findTodoByIdUseCase,
  removeTodoByIdUseCase,
  saveTodoUseCase,
}: IViewTodoProps) => {
  const router = useRouter();
  const [todo, setTodo] = useState<Todo>();
  const textColor = useMemo(
    () =>
      todo?.archived
        ? "#fff"
        : tinycolor(todo?.backgroundColor).isDark()
        ? "#fff"
        : "#000",
    [todo?.backgroundColor]
  );

  const backgroundColor = useMemo(
    () => (todo?.archived ? "#768179" : todo?.backgroundColor),
    [todo?.backgroundColor, todo?.archived]
  );

  useEffect(() => {
    const findTodo = async () => {
      const todoId = String(router.query.id);
      console.log(todoId);
      if (!todoId) return;
      const { body } = await findTodoByIdUseCase.execute({ id: todoId });
      setTodo(body);
    };
    findTodo();
  }, [router.query]);

  const handleDelete = useCallback(async () => {
    await removeTodoByIdUseCase.execute({
      id: String(todo?.title),
    });
  }, []);

  const handleArchive = useCallback(async () => {
    await saveTodoUseCase.execute({ ...todo, archived: true });
  }, []);

  return (
    <>
      <Layout>
        <div className={styles["view-todo"]}>
          <span
            style={{
              backgroundColor,
              color: textColor,
            }}
            className={styles["view-todo-card"]}
          >
            <h1>{todo?.title}</h1>
            <p>{todo?.body}</p>
            <span className={styles["view-todo-card-actions"]}>
              <IconButton onClick={handleArchive}>
                <ArchiveIcon style={{ color: textColor }} />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon style={{ color: textColor }} />
              </IconButton>
            </span>
          </span>
        </div>
      </Layout>
    </>
  );
};
