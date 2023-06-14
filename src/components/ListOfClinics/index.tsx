import { iClinic } from '../../interfaces';
import { Clinics } from '../Clinics';

type Props = {
  data: iClinic[];
};

export const ListOfClinics = ({ data }: Props) => {
  return (
    <>
      {data &&
        data.map((clinic: iClinic) => (
          <Clinics
            key={clinic.clinicId + clinic.provider.credentials}
            clinic={clinic}
          />
        ))}
    </>
  );
};
