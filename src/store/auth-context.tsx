import React, { useState, useEffect, FC } from 'react';

const AuthContext = React.createContext({
  token: '',
  username: '',
  onLogout: () => {},
  onLogin: (token: string, username: string) => {}
});

export const AuthContextProvider: FC = (props) => {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedTokenInformation = localStorage.getItem('token');
    const storedUserInformation = localStorage.getItem('username');
    setToken(storedTokenInformation ? storedTokenInformation : '');
    setUsername(storedUserInformation ? storedUserInformation : '');
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setToken('');
    setUsername('');
  };

  const loginHandler = (token: string, username: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setToken(token);
    setUsername(username);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        username,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
    );
};

export default AuthContext;