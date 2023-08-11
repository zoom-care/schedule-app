import { useState, useEffect } from 'react';
import './App.css';
import { LoginResponse } from './zoomcare-api';
import { loginAuth } from './services/api';
import { AppContext } from './context/appContext';
import ClinicDetails from './components/clinicDetails';

function App() {

  const [login, setLogin] = useState<LoginResponse>();

  useEffect(() => {
    const setLoginData = async function () {
      const data = await loginAuth('test', 'test');
      setLogin(data);
    };
    setLoginData();
  }, []);

  

  if (!login) {
    return <p>User not logged</p>;
  }

  return (
    <AppContext.Provider value={login}>
      <ClinicDetails />
    </AppContext.Provider>
  );
}

export default App;
