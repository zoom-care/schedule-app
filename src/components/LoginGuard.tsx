import { useEffect, useState } from 'react';
import { Token } from '../types';
import { isValidToken, readLocalToken } from '../utils';
import ClinicList from './ClinicList';
import Login from './Login';

const LoginGuard = () => {
  const [token, setToken] = useState<Token>({});

  const updateToken = (token: Token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  useEffect(() => {
    const localToken = readLocalToken();
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  return isValidToken(token) ? (
    <ClinicList updateToken={updateToken} />
  ) : (
    <Login updateToken={updateToken} />
  );
};

export default LoginGuard;
