/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import { Appointment } from './components/appointment/appointment';


function App() {
  return (
    <div className="container">
      <Appointment/>
    </div>
  );
}

export default App;
