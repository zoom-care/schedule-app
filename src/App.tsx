import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {LoginResponse} from './zoomcare-api';
import Appointments from 'components/Appointments';

function App() {
  const [userData,setUserData] = useState<LoginResponse>();

  useEffect(() => {
    axios.post("/api/login", {username:'x',password:'x'})
      .then(res=>setUserData(res.data))

  }, [])

  return (
    <div className="App">
      {
        userData &&
        <Appointments authToken={userData.authToken} />
        }
    </div>
  );
}

export default App;
