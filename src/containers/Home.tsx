import { useEffect } from 'react';
import { useAuth } from '../hooks';
import { AppointmentList } from '../components';
import './Home.css';

function Home() {
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    login({ username: 'Cormac Kantargis', password: 'test' });
  }, []); // eslint-disable-line

  return (
    <div className="content">
      <main>{isAuthenticated ? <AppointmentList /> : <p>Loading...</p>}</main>
    </div>
  );
}

export default Home;
