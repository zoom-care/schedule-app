import React, { FC, useEffect, useContext } from "react";
import useFetch from "use-http";
import AuthContext from "../store/auth-context";

const Login: FC = () => {
  const ctx = useContext(AuthContext);

  const username = "username";
  const password = "password";

  const { post, response, loading, error } = useFetch("/api");
  async function logUser() {
    const user = await post("/login", {
      username,
      password,
    });
    if (response.ok) {
      ctx.onLogin(user.authToken, user.username);
    }
  }
  useEffect(() => {
    logUser();
  }, []);

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}
    </>
  );
};

export default Login;
