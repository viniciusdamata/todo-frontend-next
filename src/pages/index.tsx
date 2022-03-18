import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { TodosPageFactory } from "@/main/factories/pages/TodosPage";
import { getToken } from "next-auth/jwt";

const Home: NextPage = () => {
  return (
    <>
      <TodosPageFactory />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken({
    req: context.req,
  });


  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Home;
