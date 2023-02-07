import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";
import MainRouter from "./router/mainRouter";
import { AuthContextProvider } from "./context/context";

worker
  .start({
    onUnhandledRequest: "bypass",
  })
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <AuthContextProvider>
          <MainRouter />
        </AuthContextProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  })
  .catch(console.error);
