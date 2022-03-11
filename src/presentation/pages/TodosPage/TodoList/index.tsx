import React, { useCallback, useEffect, useState } from "react";
import { ListAllTodosUseCase, Todo } from "@/domain";
import Layout from "@/presentation/components/Layout";
import { TodoCard } from "../TodoCard";
import styles from "./todoList.module.scss";
import Button from "react-bootstrap/Button";
import { Input } from "@/presentation/components/Input/Input";

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

  const handleFormSubmit = useCallback(() => {}, []);

  return (
    <>
      <Layout>
        <form onSubmit={handleFormSubmit}>
          <Input type="text" name="title" formLabel="Titulo" />
          <Input type="color" name="backgroundColor" formLabel="Cor" />
          <Input name="body" formLabel="Texto" style={{ height: "10rem" }} />
          <Button>Criar</Button>
        </form>

        <div className={styles["todo-list"]}>
          {todos.map((todo) => (
            <TodoCard {...todo} key={todo.title} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default TodoList;
