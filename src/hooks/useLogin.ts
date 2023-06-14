import { useEffect, useState } from 'react';
import { Login, LoginResponse } from '../zoomcare-api';
import { login } from '../api/login';

type Props = {
  userLogin: Login;
};

export const useLogin = ({ userLogin }: Props): LoginResponse => {
  const [user, setUser] = useState<LoginResponse>();
  const { username, password } = userLogin;

  useEffect(() => {
    const fetchLoginData = async function () {
      const data = await login(username, password);
      setUser(data);
    };
    fetchLoginData();
  }, [username, password]);

  const { authToken } = user ?? {};

  return { username, authToken: authToken ?? '' };
};
