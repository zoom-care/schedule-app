import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AppointmentList from './components/appointmentList';

function App() {
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState('');
  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    if(authToken!=='') {
      setLoading(false);
    }
  }, [authToken]);
  const getToken = async() => {
    try {
      const {data} = await axios.post('/api/login', {
        username: "John",
        password: "Test@12345"
      });
      setAuthToken(data.authToken);
      console.log("Data ==> ", data);
    }catch(error: any) {
      console.log("Error in response => ", error);
    }
  }
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
        loading? (
          <p>Loading...</p>
        ): <AppointmentList authToken={authToken} />
      }
    </div>
  );
}

export default App;
