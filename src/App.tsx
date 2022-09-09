import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import './styles/main.scss';

import Clinics from './components/Clinics';

function App() {

  const [logged, setLogged] = useState(false);

  const body = {
    'username': 'lucho',
    'password': '123'
  }

  useEffect(() =>{
    fetch('/api/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(body)
    })
    .then(response => setLogged(true))
  }, [body, logged])



  return logged? (
    <div className="App">
      <Clinics></Clinics>
    </div>
  ) : (
    <div>
      Need LogIn
    </div>
  );
}

export default App;
