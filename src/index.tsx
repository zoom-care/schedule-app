import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/browser';

import { store } from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LoginScreen from './features/auth/LoginScreen';
import RequireAuth from './features/auth/RequireAuth';
import AppointmentsScreen from './features/appointments/AppointmentsScreen';

worker
  .start({
    onUnhandledRequest: 'bypass',
  })
  .then(() => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index={true} path="/login" element={<LoginScreen />} />

          <Route path="" element={<RequireAuth />}>
            <Route path="/appointments" element={<AppointmentsScreen />} />
          </Route>
        </Route>
      )
    );

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  })
  .catch(console.error);
