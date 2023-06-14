import { useState, useEffect } from 'react';

export const use12HourFormat = (inputString: string): string | null => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const convertTo12HourFormat = (date: Date): string => {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    if (inputString) {
      const parsedDate = new Date(inputString);
      const formattedDateString = convertTo12HourFormat(parsedDate);
      setFormattedDate(formattedDateString);
    } else {
      setFormattedDate(null);
    }
  }, [inputString]);

  return formattedDate;
};
