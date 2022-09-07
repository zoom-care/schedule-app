import { configureStore } from '@reduxjs/toolkit'
import appointmentsSlice from './appointmentsSlice'
import clinicSlice from './clinicSlice'

const store = configureStore({
  reducer: {
    clinics: clinicSlice,
    appointments: appointmentsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
