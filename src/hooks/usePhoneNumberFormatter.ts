import { useEffect, useState } from 'react';

export const usePhoneNumberFormatter = (initialPhoneNumber: string): string => {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState<string>('');

  const formatPhoneNumber = (phoneNumber: string) => {
    let nString = phoneNumber.split(' ')[1];
    const numericPhoneNumber = nString.replace(/\D/g, '');

    const formattedNumber = `(${numericPhoneNumber.slice(
      0,
      3
    )}) ${numericPhoneNumber.slice(3, 6)}-${numericPhoneNumber.slice(6)}`;

    setFormattedPhoneNumber(formattedNumber);
  };

  useEffect(() => {
    formatPhoneNumber(initialPhoneNumber);
  }, []);

  return formattedPhoneNumber;
};
