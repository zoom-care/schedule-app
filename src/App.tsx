import React from 'react';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import ClinicBoard from './components/ClinicBoard';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const info = localStorage.getItem("clinic-info");
    return navigate(info ? '/clinic' : '/login');
  }, [navigate])

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/clinic" element={<ClinicBoard />} />
    </Routes>
  );
}

export default App;
