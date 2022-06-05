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
  
  getProviderSuccess(provider: any) {
    return {
      type: actionTypes.GET_PROVIDER_SUCCESS,
      provider,
		}
  },

  getProviderFailed(error: any) {
    return {
      type: actionTypes.GET_PROVIDER_FAILED,
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