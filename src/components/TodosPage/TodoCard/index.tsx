import { Todo } from "../../../domain/entities/todo";
import styles from "./todoCard.module.scss";
import Link from "next/link";
import { IconButton } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import tinyColor from "tinycolor2";
import { useMemo } from "react";

export const TodoCard = ({ archived, backgroundColor, body, title }: Todo) => {
  const textColor = useMemo(
    () => (tinyColor(backgroundColor).isDark() ? "#fff" : "#000"),
    [backgroundColor]
  );

  return (
    <section
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      className={styles["todo-card"]}
    >
      <h1>{title}</h1>
      <span>
        <p>{body.length > 250 ? body.slice(0, 250) + "..." : body}</p>
      </span>
      <span className={styles["todo-card-actions"]}>
        <IconButton>
          <DeleteIcon style={{ color: textColor }} />
        </IconButton>
        <IconButton>
          <ArchiveIcon style={{ color: textColor }} />
        </IconButton>
        <Link href={`/todos/${title}`} passHref>
          <IconButton>
            <VisibilityIcon style={{ color: textColor }} />
          </IconButton>
        </Link>
      </span>
    </section>
  );
};
