import { LoginPageFactory } from "@/main/factories/pages/LoginPage";
import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";

const Login: NextPage = () => {
  return <LoginPageFactory />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken({
    req: context.req,
  });

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Login;
