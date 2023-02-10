import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas/rootSagas";
import rootReducer from "../reducers/rootReducer";

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

export default function customConfigureStore(initialState: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagas.forEach((saga) => sagaMiddleware.run(saga));
  return { store };
}
