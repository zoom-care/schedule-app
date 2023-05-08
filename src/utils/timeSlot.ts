
export const timeSlot = (startTime: string): string => {
    const hours = startTime.split(' ')[1];
    const [start, end] = hours.split('-');
    return `${twelveHour(start)}`
}

const twelveHour = (time: string) =>  {
    const [hour, minutes] = time.split(':');
    const hourNumber: number = parseInt(hour);
    const amOrpm = hourNumber >= 12 ? 'PM':'AM';
    return `${(hourNumber % 12) || 12}:${minutes} ${amOrpm}`;
}