import React from 'react';
import './App.scss';
import Clinic from './components/Clinics/Clinic';
import Login from './components/Login/Login';
import { clinicStore } from './store/clinics';

function App() {
  const validAuth = clinicStore(state => state.validAuth);  

  return (
    <div className='App'>
      { !validAuth ? <Login /> : <Clinic /> }
    </div>
  );
}

export default App;
