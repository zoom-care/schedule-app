
export const timeSlot = (startTime: string): string => {
    return new Date(startTime.substring(0,16)).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})
}