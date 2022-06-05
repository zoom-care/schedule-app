import { createSelector } from 'reselect'

const getAppointments = state => state.clinics.appointments

const appointmentsSelector = createSelector(
	[ getAppointments ],
	appointments => {
		return appointments.map(appointment => {
			return {
				startTime: appointment.startTime,
				providerName: appointment.provider.name,
			}
		})
	},
)

export default appointmentsSelector
