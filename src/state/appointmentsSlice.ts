import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { GroupedAppointment } from '../models/ClinicAppointment'
import RequestStatus from '../models/RequestStatus.enum'
import { AppointmentSlot } from '../zoomcare-api'
import { RootState } from './store'
import { getAppointments as getAppointmentsService } from '../services'

interface AppointmentsState {
  appointments: AppointmentSlot[]
  retrieveStatus: RequestStatus
}

const initialState: AppointmentsState = {
  appointments: [],
  retrieveStatus: RequestStatus.NotStarted
}

export const getAppointments = createAsyncThunk(
  'appointments/load',
  async () => await getAppointmentsService()
)

const slice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    resetRetrieveStatus: (state: AppointmentsState) => {
      state.retrieveStatus = RequestStatus.NotStarted
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getAppointments.pending, (state) => {
        state.retrieveStatus = RequestStatus.InProgress
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.retrieveStatus = RequestStatus.Success
        state.appointments = action.payload
      })
      .addCase(getAppointments.rejected, (state) => {
        state.retrieveStatus = RequestStatus.Failure
      })
  }
})

const selectState = (state: RootState): AppointmentsState => state.appointments

export const selectRetrieveStatus = createSelector(
  selectState,
  (state) => state.retrieveStatus
)

export const selectAppointments = createSelector(
  selectState,
  (state) => state.appointments
)

export const selectGroupedAppointments = createSelector(
  selectAppointments,
  (appointments) => {
    const map = appointments.reduce<{[key: string]: GroupedAppointment}>((acc, appointment) => {
      const key = `${appointment.clinicId}-${appointment.provider.id}`
      const availableTimes = acc[key]?.availableTimes ?? []

      return {
        ...acc,
        [key]: {
          ...appointment,
          availableTimes: [
            ...availableTimes,
            {
              id: appointment.id,
              time: new Date(appointment.startTime)
            }
          ]
        }
      }
    }, {})

    return Object.values(map)
  }
)

export const { resetRetrieveStatus } = slice.actions
export default slice.reducer
