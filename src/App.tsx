import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/UserContext";
import AppointmentPage from "./pages/Appointment";
import LoginPage from "./pages/Login";
import { apiService } from "./service";

function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      apiService.defaults.headers.common["Authorization"] = token;
      console.log("apiService", apiService.defaults.headers.common);
      setUser({ token });
    }
    return () => {};
  }, []);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <Routes>
            <Route
              path={"/"}
              element={user ? <AppointmentPage /> : <LoginPage />}
            />
            <Route
              path={"/login"}
              element={user ? <Navigate to="/" /> : <LoginPage />}
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
