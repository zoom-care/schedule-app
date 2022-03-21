import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppointmentList from './pages/AppointmentList';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <AppointmentList />
    </div>
  );
}

export default App;
