import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from "./mocks/browser";
import store from './redux/store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { LOG_OUT, SET_AUTHENTICATED } from './redux/type';

worker.start({
    onUnhandledRequest: "bypass"
})
    .then(() => {
        
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>

            </React.StrictMode>,
            document.getElementById('root')
        );


        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
    }).catch(console.error)

