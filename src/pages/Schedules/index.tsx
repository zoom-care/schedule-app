import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../components/LoadingSpinner'
import ScheduleCard from '../../components/ScheduleCard'
import { useAuth } from '../../context/Auth'
import RequestStatus from '../../models/RequestStatus.enum'
import { getAppointments, selectGroupedAppointments, selectRetrieveStatus } from '../../state/appointmentsSlice'
import { getClinics, selectClinics, selectRetrieveStatus as selectClinicRetrieveStatus } from '../../state/clinicSlice'
import style from './styles.module.scss'

export default function Schedules (): React.ReactElement {
  const dispatch = useDispatch()
  const appointments = useSelector(selectGroupedAppointments)
  const clinics = useSelector(selectClinics)
  const status = useSelector(selectRetrieveStatus)
  const clinicStatus = useSelector(selectClinicRetrieveStatus)
  const { logout } = useAuth()

  function handleLogout (): void {
    logout()
  }

  useEffect(() => {
    dispatch(getAppointments())
  }, [dispatch])

  useEffect(() => {
    if (status === RequestStatus.Success) {
      const uniqueClinics = new Set(appointments.map(({ clinicId }) => clinicId))

      dispatch(getClinics(Array.from(uniqueClinics)))
    }
  }, [status, appointments, dispatch])

  function renderList (): React.ReactNode {
    if ([status, clinicStatus].includes(RequestStatus.InProgress)) {
      return (
        <div className={style.messageContainer}>
          <LoadingSpinner />
        </div>
      )
    } else if ([status, clinicStatus].every((item) => item === RequestStatus.Success)) {
      if (appointments.length === 0) {
        return <div className={style.messageContainer}>No items.</div>
      }

      return (
        <ul className={style.cardsContainer}>
          {
            appointments.map(({ id, clinicId, provider, availableTimes }) => (
              <li key={id}>
                <ScheduleCard
                  clinic={clinics[clinicId]}
                  provider={provider}
                  schedules={availableTimes}
                />
              </li>
            ))
          }
        </ul>
      )
    } else if ([status, clinicStatus].includes(RequestStatus.Failure)) {
      return <div className={style.messageContainer}>An error occurred.</div>
    }

    return null
  }

  return (
    <div className={style.container}>
      <nav className={style.topBar}>
        <h1>Schedules</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <main className={style.main}>
        {
          renderList()
        }
      </main>
    </div>
  )
}
