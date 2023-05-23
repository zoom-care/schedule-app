import { AppointmentSlot } from '../zoomcare-api';

export const formatPhone = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

export const formatStartTime = (startTimeStr: AppointmentSlot['startTime']) => {
  const [, timeStr] = startTimeStr.split(' ');
  const [startTime] = timeStr.split('-');
  const [hoursIn24, minutes] = startTime.split(':');
  const hoursIn24Int = Number(hoursIn24);
  const amOrPm = hoursIn24Int >= 12 ? 'PM' : 'AM';
  const hoursIn12 = hoursIn24Int % 12 || 12;

  return `${hoursIn12}:${minutes} ${amOrPm}`;
};
