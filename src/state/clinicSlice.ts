import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import RequestStatus from '../models/RequestStatus.enum'
import { Clinic } from '../zoomcare-api'
import { RootState } from './store'
import { getClinic as getClinicService } from '../services'

interface ClinicDictionary { [key: string]: Clinic }

interface ClinicState {
  clinics: ClinicDictionary
  retrieveStatus: RequestStatus
}

const initialState: ClinicState = {
  clinics: {},
  retrieveStatus: RequestStatus.NotStarted
}

export const getClinics = createAsyncThunk(
  'clinics/loadClinics',
  async (clinicIDs: number[]) => {
    const clinics = await Promise.allSettled(
      clinicIDs.map(async (clinicID) => await getClinicService(clinicID))
    )

    return clinics.filter((clinic) => clinic.status === 'fulfilled')
      .map((clinic) => (clinic as PromiseFulfilledResult<Clinic>).value)
  }
)

const slice = createSlice({
  name: 'clinics',
  initialState,
  reducers: {
    resetRetrieveStatus: (state: ClinicState) => {
      state.retrieveStatus = RequestStatus.NotStarted
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClinics.pending, (state) => {
        state.retrieveStatus = RequestStatus.InProgress
      })
      .addCase(getClinics.fulfilled, (state, action) => {
        state.retrieveStatus = RequestStatus.Success
        action.payload.forEach((clinic) => {
          state.clinics[clinic.id] = clinic
        })
      })
      .addCase(getClinics.rejected, (state) => {
        state.retrieveStatus = RequestStatus.Failure
      })
  }
})

const selectState = (state: RootState) => state.clinics

export const selectRetrieveStatus = createSelector(
  selectState,
  (state) => state.retrieveStatus
)

export const selectClinics = createSelector(
  selectState,
  (state) => state.clinics
)

export const { resetRetrieveStatus } = slice.actions
export default slice.reducer
