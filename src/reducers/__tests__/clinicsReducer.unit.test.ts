import clinicsReducer from 'reducers/clinicsReducer'
import actionTypes from 'actions/actionTypes'

describe('clinicsReducer', () => {

	const defaultState = {
		appointments: [],
        providers: [],
	}

	it('GET_APPOINTMENTS_SUCCESS', () => {
		const currentState = {
			...defaultState,
		}

		const action = {
			type: actionTypes.GET_APPOINTMENTS_SUCCESS,
			appointmentSlots: [{
                id: 1
            }]
		}

		const expectedState = {
			...currentState,
            appointments: action.appointmentSlots
		}

		expect(
			clinicsReducer(currentState, action)
		).toEqual(expectedState)
	})

    it('GET_PROVIDERS_SUCCESS', () => {
		const currentState = {
			...defaultState,
		}

		const action = {
			type: actionTypes.GET_PROVIDERS_SUCCESS,
			providers: [{
                id: 1
            }]
		}

		const expectedState = {
			...currentState,
            providers: action.providers
		}

		expect(
			clinicsReducer(currentState, action)
		).toEqual(expectedState)
	})
})
