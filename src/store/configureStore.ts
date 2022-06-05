import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/rootSagas';
import rootReducer from 'reducers/rootReducer';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

export default function configureStore (initialState: any) {
    const store = createStore(rootReducer, initialState, middlewares);

	sagaMiddleware.run(rootSaga);
  return { store }
}