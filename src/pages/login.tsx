import { GetServerSideProps, NextPage } from "next";
import { getToken } from "next-auth/jwt";
import { signIn, signOut } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <div>
      {/* Access Token: {data?.user} */}
      <button
        onClick={() =>
          signIn("cognito", {
            callbackUrl: "http://localhost:3000",
            redirect: true,
          })
        }
      >
        Login
      </button>
    </div>
  );
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
