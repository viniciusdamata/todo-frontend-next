import Link from "next/link";
import { memo, useCallback, useMemo } from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import tinyColor from "tinycolor2";
import styles from "./todoCard.module.scss";
import { Todo } from "@/domain";

interface ITodoCardProps {
  todo: Todo;
  handleDelete(title: string): Promise<void>;
  handleArchive(todo: Todo): Promise<void>;
}

export const TodoCard = memo(
  ({ todo, handleDelete, handleArchive }: ITodoCardProps) => {
    const textColor = useMemo(
      () =>
        todo.archived
          ? "#fff"
          : tinyColor(todo.backgroundColor).isDark()
          ? "#fff"
          : "#000",
      [todo.archived, todo.backgroundColor]
    );

    const backgroundColor = useMemo(
      () => (todo.archived ? "#768179" : todo.backgroundColor),
      [todo.backgroundColor, todo.archived]
    );

    const onClickDelete = useCallback(async () => {
      await handleDelete(todo.title);
    }, [handleDelete, todo]);

    const onClickArchive = useCallback(async () => {
      await handleArchive(todo);
    }, [handleArchive, todo]);

    return (
      <section
        style={{
          backgroundColor,
          color: textColor,
        }}
        className={styles["todo-card"]}
      >
        <h1>{todo.title}</h1>
        <span>
          <p>
            {todo.body.length > 250
              ? todo.body.slice(0, 250) + "..."
              : todo.body}
          </p>
        </span>
        <span className={styles["todo-card-actions"]}>
          <span onClick={onClickDelete}>
            <DeleteIcon style={{ color: textColor }} />
          </span>
          <span onClick={onClickArchive}>
            <ArchiveIcon style={{ color: textColor }} />
          </span>
          <Link href={`/todos/${todo.title}`} passHref>
            <span>
              <VisibilityIcon style={{ color: textColor }} />
            </span>
          </Link>
        </span>
      </section>
    );
  }
);

TodoCard.displayName = TodoCard.name;
