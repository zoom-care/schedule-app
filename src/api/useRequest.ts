import { useQuery } from "react-query";
import { getAllAppointments, getClinicById } from ".";

export const useAllAppointmentsData = (): {
  data?: AppointmentsDto;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
} => {
  const { isLoading, data, isError, refetch } = useQuery<
    AppointmentsDto,
    Error
  >({
    queryKey: ["AllAppointments"],
    queryFn: getAllAppointments,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export const useClinicById = (
  clinicId: number
): {
  data?: Clinic;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
} => {
  const { isLoading, data, isError, refetch } = useQuery<Clinic, Error>({
    queryKey: ["AllAppointments", clinicId],
    queryFn: () => getClinicById(clinicId),
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};
