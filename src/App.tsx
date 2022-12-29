import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import ScheduleApp from './components/ScheduleApp';

function App() {
  const navigate = useNavigate();

 useEffect(() => {
    const info = localStorage.getItem("user-info");
    return navigate(info ? '/clinic' : '/login');
  }, [navigate])

return (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/clinic" element={<ScheduleApp />} />
  </Routes>
);}

export default App;