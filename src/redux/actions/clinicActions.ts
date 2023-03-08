import actionTypes from "./actionTypes";

const clinicActions = {
  loginUser() {
    return {
      type: actionTypes.LOGIN,
    };
  },

  loginFailed(error: any) {
    return {
      type: actionTypes.LOGIN_FAILED,
      error,
    };
  },

  getClinicsSuccess(providers: Array<any>) {
    return {
      type: actionTypes.GET_CLINICS_SUCCESS,
      providers,
    };
  },

  getClinicsFailed(error: any) {
    return {
      type: actionTypes.GET_CLINICS_FAILED,
      error,
    };
  },

  getAppointmentsSuccess(appointmentSlots: Array<any>) {
    return {
      type: actionTypes.GET_APPOINTMENTS_SUCCESS,
      appointmentSlots,
    };
  },

  getAppointmentsFailed(error: any) {
    return {
      type: actionTypes.GET_APPOINTMENTS_FAILED,
      error,
    };
  },
};

export default clinicActions;
