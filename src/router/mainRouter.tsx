import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Home } from "../pages";

import { RouteList } from "../constants/Routes";
import AuthorizedRouter from "./authorizedRouter";

const MainRouter = () => {
  return (
    <BrowserRouter basename={RouteList.BASE}>
      <Routes>
        <Route path={RouteList.USER_LOGIN} element={<Login />} />
        <Route
          path={RouteList.BASE}
          element={
            <AuthorizedRouter>
              <Home />
            </AuthorizedRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
