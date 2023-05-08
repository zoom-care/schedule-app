import { useEffect, useState } from 'react';
import './App.css';
import { login } from './services/login';
import { LoginResponse } from './zoomcare-api';
import { ClinicList } from './components/ClinicList/ClinicList';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<LoginResponse>();

  useEffect(() => {
    const fetchLoginData = async function () {
      const data = await login('juan', 'juan');
      setUser(data);
      setLoading(false);
    };
    fetchLoginData();
  }, []);

  if (loading) {
    return <p>Loading User</p>;
  }

  if (!user) {
    return <p>User not logged</p>;
  }

  return (
    <div className="App">
      <ClinicList />
    </div>
  );
}

export default App;

