import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import appointmentReducer from './reducers/appoint'
// import uiReducer from './reducers/uiReducer';
const initialState = {};
const middleware = [thunk];
//this is for redux devtool purpose
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const reducer = combineReducers({
  auth: authReducer,//user key ma store gareko
  appointment: appointmentReducer
});
const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware), (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any));
export default store;