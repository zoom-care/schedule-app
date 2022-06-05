import { combineReducers } from 'redux';
import clinicsReducer from './clinicsReducer'

const rootReducer = combineReducers({
  clinics: clinicsReducer,
})

export default rootReducer