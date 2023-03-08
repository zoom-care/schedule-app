import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas/rootSagas";
import rootReducer from "../reducers/rootReducer";

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

export default function customConfigureStore(initialState: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  sagas.forEach((saga) => sagaMiddleware.run(saga));
  return { store };
}
