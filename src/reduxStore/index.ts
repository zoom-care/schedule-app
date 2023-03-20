import { all } from "redux-saga/effects";
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
  Reducer,
  Store,
  StoreEnhancer,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./auth/auth.reducer";
import { authSaga } from "./auth/auth.saga";

const rootReducer = combineReducers<ApplicationGlobalState>({
  auth: authReducer,
});

function* rootSaga() {
  yield all([authSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: {
        // Enable serializers for "undefined", Map, Set etc.
        options: true,
      },
    })
  : compose;

const createStore = legacy_createStore as (
  reducer: Reducer<ApplicationGlobalState>,
  enhancer: StoreEnhancer
) => Store;

export const reduxStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

/**
 * If you want log out from all tabs, then you can use redux-state-sync
 * for synchronizing between stores via same channel.
 */
