import type { NextPage } from "next";
import { TodosPageFactory } from "@/main/factories/pages/TodosPage";

const Home: NextPage = () => {
  return (
    <>
      <TodosPageFactory />
    </>
  );
};

export default Home;
