import { useEffect, useState } from 'react';

export const useAddressFormatter = (
  state: string | undefined,
  city: string | undefined,
  zipcode: string | undefined
): string => {
  const [formattedAddress, setFormattedAddress] = useState('');
  let nState = state?.slice(0, 2).toUpperCase();
  useEffect(() => {
    const address = `${city}, ${nState} ${zipcode}`;
    setFormattedAddress(address);
  }, [nState, city, zipcode]);

  return formattedAddress;
};
