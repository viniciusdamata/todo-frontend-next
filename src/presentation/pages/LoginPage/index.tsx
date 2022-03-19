import { signIn } from "next-auth/react";
import { useCallback } from "react";
import { Button } from "react-bootstrap";
import styles from "./loginPage.module.scss";

export const LoginPage = () => {
  const handleLogin = useCallback(async () => {
    await signIn("cognito", {
      callbackUrl: "http://localhost:3000",
      redirect: true,
    });
  }, []);

  return (
    <div className={styles["login-page"]}>
      <h1>TodoApp</h1>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
