import actionTypes from './actionTypes'

const providerActions = {
  loginUser() {
    return {
      type: actionTypes.LOGIN,
		}
  },

  loginFailed(error: any) {
    return {
      type: actionTypes.LOGIN_FAILED,
      error,
		}
  },
  
  getProvidersSuccess(providers: Array<any>) {
    return {
      type: actionTypes.GET_PROVIDERS_SUCCESS,
      providers,
		}
  },

  getProvidersFailed(error: any) {
    return {
      type: actionTypes.GET_PROVIDERS_FAILED,
      error,
		}
  },

  getAppointmentsSuccess(appointmentSlots: Array<any>) {
    return {
      type: actionTypes.GET_APPOINTMENTS_SUCCESS,
      appointmentSlots,
		}
  },

  getAppointmentsFailed(error: any) {
    return {
      type: actionTypes.GET_APPOINTMENTS_FAILED,
      error,
		}
  },
}

export default providerActions