/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import useAuthViewModel from "./Presentation/Auth/AuthViewModel";
import { AppointmentsView } from "./Presentation/Appointments/AppointmentsView";

function App() {
  const { data: AuthToken, getAuthToken } = useAuthViewModel();

  useEffect(() => {
    getAuthToken();
  }, []);

  const renderClinicsView = AuthToken?.authToken ? (
    <AppointmentsView />
  ) : undefined;

  return (
    <div className="App">
      <header className="App-header">{renderClinicsView}</header>
    </div>
  );
}

export default App;
