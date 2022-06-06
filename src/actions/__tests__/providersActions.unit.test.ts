import actionTypes from 'actions/actionTypes'
import providerActions from '../providerActions'

describe('Actions => providerActions', () => {

	it('test loginUser action generator', () => {
		const action = {
			type: actionTypes.LOGIN,
		}

		const generatedAction = providerActions.loginUser()
		expect(generatedAction).toEqual(action)
	})

    it('test loginFailed action generator', () => {
        const error = "failed"

		const action = {
			type: actionTypes.LOGIN_FAILED,
            error,
		}

		const generatedAction = providerActions.loginFailed(error)
		expect(generatedAction).toEqual(action)
	})

    it('test getProvidersSuccess action generator', () => {
        const providers: any[] = []

		const action = {
			type: actionTypes.GET_PROVIDERS_SUCCESS,
            providers,
		}

		const generatedAction = providerActions.getProvidersSuccess(providers)
		expect(generatedAction).toEqual(action)
	})

    it('test getProvidersFailed action generator', () => {
        const error = "failed"

		const action = {
			type: actionTypes.GET_PROVIDERS_FAILED,
            error,
		}

		const generatedAction = providerActions.getProvidersFailed(error)
		expect(generatedAction).toEqual(action)
	})

    it('test getAppointmentsSuccess action generator', () => {
        const appointmentSlots: any[] = []

		const action = {
			type: actionTypes.GET_APPOINTMENTS_SUCCESS,
            appointmentSlots,
		}

		const generatedAction = providerActions.getAppointmentsSuccess(appointmentSlots)
		expect(generatedAction).toEqual(action)
	})

    it('test getAppointmentsFailed action generator', () => {
        const error = "failed"

		const action = {
			type: actionTypes.GET_APPOINTMENTS_FAILED,
            error,
		}

		const generatedAction = providerActions.getAppointmentsFailed(error)
		expect(generatedAction).toEqual(action)
	})
})
