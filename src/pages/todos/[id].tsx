import { ViewTodoPageFactory } from "@/main/factories/pages/ViewTodoPage";
import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";

const ViewTodoPage: NextPage = () => {
  return (
    <>
      <ViewTodoPageFactory />
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

export default ViewTodoPage;
