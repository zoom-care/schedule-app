import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { onLoginUser } from "../../reduxStore/auth/auth.actions";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useDispatch();
  const [formVals, setFormVals] = useState({ email: "", password: "" });

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (formVals.password === "" || formVals.email === "") {
        return;
      }
      dispatch(onLoginUser({ ...formVals }));
    },
    [dispatch, formVals]
  );

  const handleChangeFormVals = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormVals((formVals) => ({
        ...formVals,
        [e.target.id]: e.target.value,
      })),
    []
  );

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleLogin}>
        <div className="my-2">
          <label>User Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            onChange={handleChangeFormVals}
          />
        </div>
        <div className="my-2">
          <label>User Password</label>
          <input
            id="password"
            type="password"
            className="form-control"
            onChange={handleChangeFormVals}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Log In
        </button>
      </form>
    </div>
  );
};
