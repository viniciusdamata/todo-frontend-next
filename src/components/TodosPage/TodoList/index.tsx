import React, { useCallback, useEffect, useState } from "react";
import { ListAllTodosUseCase, Todo } from "../../../domain";
import Layout from "../../Layout";
import { TodoCard } from "../TodoCard";
import styles from "./todoList.module.scss";
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

  const handleFormSubmit = useCallback(() => { 


  },[])

  return (
    <>
      <Layout>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="">Titulo</label>
          <input type="text" name="title" />
          <label htmlFor="">Titulo</label>
          <input type="color" name="backgroundColor" />
          <label htmlFor="body">Conteúdo</label>
          <textarea name="body" />
          <button>Criar</button>
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
