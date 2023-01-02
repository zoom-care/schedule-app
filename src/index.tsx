import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import Home from './components/Home';
import Clinics from './components/Clinics';
import reportWebVitals from './reportWebVitals';
import {worker} from "./mocks/browser";
import Providers from './components/Providers'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/clinics",
        element: <Clinics />,
    },
    {
        path: "/providers",
        element: <Providers />,
    },
]);

worker.start({
    onUnhandledRequest: "bypass"
})
.then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}).catch(console.error)
