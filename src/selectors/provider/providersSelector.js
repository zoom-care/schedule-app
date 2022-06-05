import { createSelector } from 'reselect'

const getProviders = state => state.clinics

const providersSelector = createSelector(
	[ getProviders ],
	providers => {
		console.log("providers", providers)
		return {
			providers
		}
	}
)

export default providersSelector
