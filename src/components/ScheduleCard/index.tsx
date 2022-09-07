import React from 'react'
import { Schedule } from '../../models/ClinicAppointment'
import { Clinic, Provider } from '../../zoomcare-api'
import style from './styles.module.scss'

export interface ScheduleCardProps {
  clinic?: Clinic
  provider: Provider
  schedules: Schedule[]
}

export default function ScheduleCard ({
  clinic,
  provider,
  schedules
}: ScheduleCardProps): React.ReactElement {
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short'
  })

  return (
    <article className={style.container}>
      <header className={style.clinicInfo}>
        {
          (clinic != null)
            ? (
              <>
                <h2 className={style.name}>{clinic.name}</h2>
                <div>{clinic.address}</div>
                <div>
                  {
                    clinic
                      ? `${clinic.city}, ${clinic.state} ${clinic.zipcode}`
                      : null
                  }
                </div>
              </>
              )
            : <div>[No clinic info]</div>
        }
      </header>
      <main>
        <div className={style.icon}>
          <i className="fa-solid fa-user-doctor"></i>
        </div>
        <div className={style.providerInfo}>
          <h3 className={style.name}>
            {`${provider.name}, ${provider.credentials}`}
          </h3>
          <span>{provider.phoneNumber ?? 's/n'}</span>
          <ul className={style.buttonList}>
            {
              schedules.map(({ id, time }) => (
                <li key={id}>
                  <button>{dateTimeFormat.format(time)}</button>
                </li>
              ))
            }
          </ul>
        </div>
      </main>
    </article>
  )
}
