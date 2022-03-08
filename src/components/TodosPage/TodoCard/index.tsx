import { Todo } from "../../../domain/entities/todo";
import styles from "./todoCard.module.scss";
import Link from "next/link";

export const TodoCard = ({ archived, backgroundColor, body, title }: Todo) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles["root"]}
    >
      <Link href={`/todos/${title}`} passHref >
        <h1>{title}</h1>
      </Link>
      <p>{body}</p>
    </section>
  );
};
