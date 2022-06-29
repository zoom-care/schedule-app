import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './ContextProviders/UserProvider/UserProvider';
import reportWebVitals from './reportWebVitals';
import { worker } from "./mocks/browser";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

worker.start({
    onUnhandledRequest: "bypass"
})
    .then(() => {

        ReactDOM.render(
            <React.StrictMode>
                <UserProvider>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </UserProvider>
            </React.StrictMode>,
            document.getElementById('root')
        );


        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
    }).catch(console.error)

