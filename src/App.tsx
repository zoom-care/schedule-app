import ClinicList from './components/clinic-list/ClinicList';
import { createContext, useEffect, useState, } from 'react';
import { login } from './services/LoginService';
import Error from './components/error/Error';

import './App.css';

export const LoginContext = createContext<string>('')

function App() {
  const [authToken, setAuthToken] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      try {
        const auth = await login({ username: 'user', password: 'pass' })
        setAuthToken(auth?.authToken || '')
      } catch {
        setError(true)
      }
    })()
  }, [])

  if (error) {
    return <Error />
  }

  return (
    <div className="App">
      <LoginContext.Provider value={authToken}>
        {authToken && <ClinicList />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
