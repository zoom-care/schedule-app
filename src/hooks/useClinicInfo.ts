import { useEffect, useState } from 'react';
import { iClinicInfo } from '../interfaces';
import { mockClinics } from '../mocks/data/clinics';

export const useClinicInfo = (id: number) => {
  const [data, setData] = useState<iClinicInfo>();

  useEffect(() => {
    const fetchData = async () => {
      let clinic = mockClinics;
      let nClinic = clinic?.find((i) => i.id === id);
      setData(nClinic);
    };

    fetchData();
  }, [id]);

  let { name, address, city, state, zipcode } = data ?? {};

  return { cName:name, address, city, state, zipcode };
};
