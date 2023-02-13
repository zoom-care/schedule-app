
// import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, useLocation, Route, Routes, Navigate } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';
import { SET_AUTHENTICATED } from './redux/type';
import { logoutUser } from './redux/actions/auth';

function App() {
  const dispatch: any = useDispatch();
  const { isAuthenticated } = useSelector((state: any) => ({
    isAuthenticated: state.auth.authenticated
  }));
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
      dispatch({
        type: SET_AUTHENTICATED,
      });
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) dispatch(logoutUser());
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/login'} element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route
            path={'/home'}
            element={<Home />}
          />
          <Route path={'/'} element={isAuthenticated ? <Home /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
