import type { NextPage } from "next";
import { TodoListFactory } from "../main/factories/pages/TodoList";

const Home: NextPage = () => {


  return (
    <TodoListFactory />
  );
};

export default Home;
