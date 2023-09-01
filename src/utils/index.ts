export const getFormattedTime = (time: string): string => {
  const hourOfDay = parseInt(time.substring(0, 2));
  const period = hourOfDay >= 12 ? 'PM' : 'AM';
  const formattedHour12 = hourOfDay > 12 ? hourOfDay - 12 : hourOfDay;
  const formattedTime = `${formattedHour12}:${time.substring(3)} ${period}`;
  return formattedTime;
};

export const getAppointmentSlots = (appointmentSlots: string, durationInMinutes: number): string[] => {
  const slots: string[] = [];
  const matches = appointmentSlots.match(/(\d{2}:\d{2})(-\d{2}:\d{2})$/);

  if (matches && matches.length === 3) {
    const firstSlot = matches[1];
    const lastSlot = matches[2].substring(1);
    console.log('debug firstSlot', firstSlot);
    console.log('debug lastSlot', lastSlot);
    let currentTime = lastSlot;
    while (currentTime !== firstSlot) {
      slots.push(getFormattedTime(currentTime));
      const [hours, minutes] = currentTime.split(':').map(Number);
      const totalMinutes = hours * 60 + minutes + durationInMinutes;
      const newHours = Math.floor(totalMinutes / 60) % 24;
      const newMinutes = totalMinutes % 60;
      currentTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
    }

    slots.push(getFormattedTime(firstSlot));
  }

  return slots;
};

export const timeSlot = (startTime: string): string => {
  return new Date(startTime.substring(0,16)).toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})
};
