import { ArchivedTodosPageFactory } from "@/main/factories/pages/ArchivedTodosPage";
import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";
const Archived: NextPage = () => {
  return (
    <>
      <ArchivedTodosPageFactory />
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

export default Archived;
