import { Todo } from "../../../domain/entities/todo";
import styles from "./todoCard.module.scss"

export const TodoCard = ({ archived, backgroundColor, body, title }: Todo) => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor,
      }}
      className={styles['root']}
    >
      <h1>{title}</h1>
      <p>{body}</p>
    </section>
  );
};
