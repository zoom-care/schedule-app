/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAppointmentsViewModel from "./AppointmentsViewModel";
import { ClinicView } from "../Clinics/ClinicView";
import moment from "moment";
import { formatPhoneNumber } from "../../Core/utils/formatPhoneNumber";

export const AppointmentsView = (): React.ReactElement => {
  const { appointments, getAppointments } = useAppointmentsViewModel();
  const [clinicsIds, setClinicsIds] = useState<number[]>([]);
  const [providerIds, setProviderIds] = useState<number[]>([]);

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    if (appointments?.appointmentSlots.length) {
      const clinics = appointments?.appointmentSlots;
      const ids: number[] = [];
      const provIds: number[] = [];

      clinics.forEach((appointment) => {
        if (!ids.some((id) => id === appointment.clinicId)) {
          ids.push(appointment.clinicId);
        }
      });

      setClinicsIds(ids);

      clinics.forEach((appointment) => {
        if (!provIds.some((id) => id === appointment.provider.id)) {
          provIds.push(appointment.provider.id);
        }
      });

      setProviderIds(provIds);
    }
  }, [appointments]);

  const renderProvidersAndSlots = providerIds.length
    ? providerIds.map((providerId) => {
        const provider = appointments?.appointmentSlots.find(
          (appointment) => appointment.provider.id === providerId
        )?.provider;

        const slots = appointments?.appointmentSlots.filter(
          (appointment) => appointment.provider.id === providerId
        );

        const renderSlots = slots?.length
          ? slots.map((slot) => {
              return (
                <div className="px-2 inline-flex">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {moment(slot.startTime).format("hh:mm A")}
                  </button>
                </div>
              );
            })
          : undefined;

        const formattedPhoneNumber = provider?.phoneNumber
          ? formatPhoneNumber(provider?.phoneNumber)
          : undefined;

        return (
          <div className="max-w-sm p-6 bg-white dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />{" "}
            </svg>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {provider?.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {formattedPhoneNumber}
            </p>
            {renderSlots}
          </div>
        );
      })
    : undefined;

  const renderClinics = clinicsIds.length
    ? clinicsIds.map((clinicId, idx) => {
        return (
          <ClinicView key={idx} clinicId={`${clinicId}`}>
            {renderProvidersAndSlots}
          </ClinicView>
        );
      })
    : undefined;

  return <>{renderClinics}</>;
};
