import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAllAppointmentsData } from "../../api/useRequest";
import { onLogoutUser } from "../../reduxStore/auth/auth.actions";
import { ClinicCard } from "./Clinic";

type HomePageProps = {};

export const HomePage: React.FC<HomePageProps> = () => {
  const appointsQuery = useAllAppointmentsData();
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(onLogoutUser());
  }, [dispatch]);
  const appointsGroupedByClinic = useMemo<[string, AppointmentSlot[]][]>(
    () =>
      appointsQuery.data
        ? Object.entries(
            appointsQuery.data.appointmentSlots.reduce<
              Record<string, AppointmentSlot[]>
            >(
              (res, appoint) => ({
                ...res,
                [appoint.clinicId]: [
                  ...(res[appoint.clinicId.toString()] ?? []),
                  appoint,
                ],
              }),
              {}
            )
          )
        : [],
    [appointsQuery.data]
  );
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Home</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {appointsGroupedByClinic.map(([clinicId, appointments]) => (
        <ClinicCard
          key={`key-${clinicId}`}
          clinicId={Number(clinicId)}
          appointments={appointments}
        />
      ))}
    </div>
  );
};
