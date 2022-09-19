import moment from "moment";

export const extractTimeslots = (startTime: string, slotDuration: number) => {

    const timeslots: string[] = [];

    const splittedDateTime = startTime.split(" ");
    const splittedTimeRange = splittedDateTime[1].split("-").map(time => {
        return {
            hours: moment(time, "HH:mm").get("hour"),
            minutes: moment(time, "HH:mm").get("minute"),
        }
    });
    let startDateTime = moment(splittedDateTime[0], "YYYY-MM-DD").add(splittedTimeRange[0]);
    let endDateTime = moment(splittedDateTime[0], "YYYY-MM-DD").add(splittedTimeRange[1]);

    // If endTime is before the start
    // then add 1 day so it fall in the next day
    if (endDateTime.isBefore(startDateTime)) {
        endDateTime = endDateTime.add(1, "day");
    }

    while (startDateTime.diff(endDateTime) <= 0) {
        timeslots.push(startDateTime.format('hh:mm A'));
        startDateTime.add(slotDuration, 'minutes');
    }
    return timeslots;
}