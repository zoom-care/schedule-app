const valdateClinic = (clinicsAvailable: Array<any>, clinicId: Number): boolean => {
  return clinicsAvailable.some((clinic: any) => clinic.id === clinicId);
}

const convertTimes = (time: string) => {
  const timesExp = RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s(.*)$/g).exec(time);
  if (timesExp) {
    const times = timesExp[1];
    return times.split("-");
  }
}

const formatTime = (time: string) => {
  let timeArr = time.split(":");
  let hours = parseInt(timeArr[0]);
  let minutes = timeArr[1];
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // convert midnight (0) to 12 AM
  let formattedTime = hours + ":" + minutes + " " + amPm;
  return formattedTime;
}

export { convertTimes, valdateClinic, formatTime };
