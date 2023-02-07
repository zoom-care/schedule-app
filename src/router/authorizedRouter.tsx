import React, { ReactNode, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Error } from "../components";
import { RouteList } from "../constants/Routes";
import { useAuthContext } from "../context/context";
import { checkUserToken } from "../utils";

interface IProps {
  children: ReactNode;
}

const AuthorizedRouter = ({ children }: IProps) => {
  const navigate = useNavigate();
  const { setToken, setAuthorizedUsername } = useAuthContext();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const result = checkUserToken();
    setIsLoggedIn(result.result);
    setToken(result.token);
    setAuthorizedUsername(result.username);
    if (!result.result) navigate(RouteList.USER_LOGIN);
  }, []);

  return <>{isLoggedIn ? children : <Error />}</>;
};

export default AuthorizedRouter;
