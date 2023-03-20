import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Login/Login";
import { onInitAuth } from "./reduxStore/auth/auth.actions";
import { selectIsAuthenticated } from "./reduxStore/auth/auth.reducer";

function AppRoutes() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onInitAuth());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/home" />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
