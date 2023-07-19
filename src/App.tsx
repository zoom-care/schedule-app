import React, { FC } from 'react';
import Appointments from './pages/Appointments';
import './App.css';
import Login from './components/Login';

const App: FC = () => {
  return (
    <>
      <h1 style={{paddingLeft: '24px'}}>Appointments App</h1>
      <Login/>
      <Appointments/>
    </>
  );
}

export default App;
