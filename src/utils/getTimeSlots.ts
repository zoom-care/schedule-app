import { eachMinuteOfInterval, format  } from 'date-fns'

export const getTimeSlots = (startTime: string, gap: number) => {
    const [date, time] = startTime.split(' ')
    const [year, month, day] = date.split('-')
    const [timeFrom, timeTo] = time.split('-').reverse()

    const result = eachMinuteOfInterval({
        start: new Date(+year, +month, +day, +timeFrom.substring(0,2)),
        end: new Date(+year, +month, +day, +timeTo.substring(0,2))
    }, { step: gap })

    const first3TimeSlots = result.slice(-3)
                            .map(dateTime => {
                                // return `${dateTime.getHours()}:${dateTime.getMinutes()}`
                                return format(dateTime, "h:mm a")
                            })                       
    return first3TimeSlots
}
//2020-02-08 21:00-07:00"