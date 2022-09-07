import React, { useEffect, useState } from 'react';

const LoginGuard = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    const localToken = localStorage.getItem('token');

    if (localToken) {
      setToken(JSON.parse(localToken));
    }
  }, []);

  return token.hasOwnProperty('authToken') ? (
    <div>Logged in</div>
  ) : (
    <div>Not logged in</div>
  );
};

export default LoginGuard;
