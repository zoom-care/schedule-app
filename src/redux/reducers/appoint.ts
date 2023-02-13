import { GET_ALL_APPOINTMENTS, GET_DETAIL_APPOINTMENT } from '../type';

const initialState = {
  authenticated: false,
  appointments: [],
  activeAppointment:{}
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_ALL_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload
      };
    case GET_DETAIL_APPOINTMENT:
      return {
        ...state,
        activeAppointment: action.payload
      };
    
    default:
      return state;
  }
}
