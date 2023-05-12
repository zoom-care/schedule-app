import { AppointmentSlot } from '../zoomcare-api'

export const startTimeFormatter = (startTime: AppointmentSlot['startTime']) => {
  const [, hours] = startTime.split(' ')
  const timesArray = hours.split('-')

  return timesArray.map(time => {
    const [hour24, minutes] = time.split(':')
    const suffix = +hour24 > 12 ? 'PM' : 'AM'
    const hour12 = +hour24 > 12 ? +hour24 - 12 : +hour24 === 0 ? 12 : +hour24
    return `${hour12}:${minutes} ${suffix}`
  })
}
