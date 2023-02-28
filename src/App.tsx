import { useEffect, useState } from 'react';
import './App.css';
import { fetchAuthToken } from './hooks/authService';
import ClinicList from './components/ClinicList';

const App = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchAuthToken(setToken);
    }
  }, [token]);

  return (
    <div className="App">
      <ClinicList token={token}/>
    </div>
  );
}

export default App;
