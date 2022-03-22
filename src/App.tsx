import React from 'react';
import { AuthProvider } from './context/Auth';
import { AppointmentsList } from './components/AppointmentsList';

import './App.css';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <AppointmentsList />
      </AuthProvider>
    </div>
  );
}

export default App;
