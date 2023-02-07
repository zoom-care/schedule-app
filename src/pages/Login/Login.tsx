import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Input, Button, Error } from "../../components";
import { RouteList } from "../../constants/Routes";
import { userLogin } from "../../services/apis";
import { ApiError, LoginResponse } from "../../zoomcare-api";
import { useAuthContext } from "../../context/context";

import "./styles.css";

const Login = () => {
  const navigate = useNavigate();
  const { setToken, setAuthorizedUsername } = useAuthContext();
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [isDisabledUserLogin, setIsDisabledUserLogin] = useState<boolean>(true);
  const [isGetError, setIsGetError] = useState<boolean>(false);

  const handleChangeUsername = (value: string) => {
    setUserName(value);
  };

  const handleChangePassword = (value: string) => {
    setUserPassword(value);
  };

  const navigateHomePage = (authToken: string, username: string) => {
    setToken(authToken);
    setAuthorizedUsername(username);
    navigate(RouteList.BASE);
  };

  const handleUserLogin = async () => {
    if (userName && userPassword) {
      const loginResult: LoginResponse | ApiError = await userLogin(
        userName,
        userPassword
      );
      if ("error" in loginResult) {
        setIsGetError(true);
      } else {
        const { authToken, username } = loginResult;
        localStorage.setItem("user-token", authToken);
        localStorage.setItem("user-name", username);
        navigateHomePage(authToken, username);
      }
    }
  };

  useEffect(() => {
    if (userName && userPassword) {
      setIsDisabledUserLogin(false);
    } else {
      setIsDisabledUserLogin(true);
    }
  }, [userName, userPassword]);

  return (
    <div id="loginform">
      <h2 id="headerTitle">LogIn</h2>
      <Input
        description="Username"
        placeholder="Enter your username"
        type="text"
        onChange={handleChangeUsername}
      />
      <Input
        description="Password"
        placeholder="Enter your password"
        type="password"
        onChange={handleChangePassword}
      />
      <Button
        title="Log in"
        onClick={handleUserLogin}
        isDisabled={isDisabledUserLogin}
      />
      {isGetError && <Error />}
    </div>
  );
};

export default Login;
