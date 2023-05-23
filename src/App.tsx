import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContext } from './contexts';
import { Login, ApiError } from './zoomcare-api';
import { login, logout } from './apis';
import { Home } from './containers';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const loginFunc = async (credentials: Login) => {
    try {
      const result = await login(credentials);
      setIsAuthenticated(true);
      setUsername(result.username);
      setError(undefined);
    } catch (err) {
      setIsAuthenticated(false);
      setUsername(undefined);
      setError((err as ApiError).error);
    }
  };

  const logoutFunc = () => {
    logout();
    setIsAuthenticated(false);
    setUsername(undefined);
    setError(undefined);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{
          username,
          isAuthenticated,
          login: loginFunc,
          logout: logoutFunc,
        }}
      >
        <div className="App">
          <Home />
          {error && <div className="error">{error}</div>}
        </div>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
