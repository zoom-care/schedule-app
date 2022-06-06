import actionTypes from 'actions/actionTypes';
import initialState from './initialState';
  
const clinicsReducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionTypes.GET_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                appointments: action.appointmentSlots,
            };
        case actionTypes.GET_PROVIDERS_SUCCESS:
            return {
                ...state,
                providers: action.providers
            }

        default:
            return state;
    }
}

export default clinicsReducer