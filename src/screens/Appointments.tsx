import { useEffect, useState } from "react";
import { mockLogin } from "../api/auth.api";
import { fetchAppoitments } from "../api/appointments.api";
import AppointmentsList from "../components/appointments-list";
import { ClinicAppointment } from "../zoomcare-api";
import { extractClinicIds } from "../utils/extractsClinicsIds";
import { fetchClinicsListByIds } from "../api/clinics.api";
import { parseClinicsAppointments } from "../utils/parseClinicsAppointments";

const Appointments = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [apiError, setApiError] = useState<string | null>(null);
    const [appointmentList, setAppointmentsList] = useState<ClinicAppointment[]>([])

    const loadAppointments = async () => {
        try {
            const authResult = await mockLogin();
            const appointmentsResult = await fetchAppoitments(authResult.authToken);
            const clinicsIdsList = extractClinicIds(appointmentsResult.appointmentSlots);
            const clinicsList = await fetchClinicsListByIds(clinicsIdsList, authResult.authToken);
            const clinicAppointments = parseClinicsAppointments(clinicsList, appointmentsResult.appointmentSlots);
            setAppointmentsList(clinicAppointments);
            console.log("Appointments Result", clinicAppointments);
        } catch (error: any) {
            setApiError(error.error as string);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadAppointments();
    }, []);

    return (
        <div className="appointmentsContainer">
            {isLoading ? (
                <div className="loadingContainer">
                    <p>Loading Appointments...</p>
                </div>
            ):
            apiError ? (
                <div className="errorContainer">
                    <p>{apiError}</p>
                </div>
            ): (
                <AppointmentsList appointmentsList={appointmentList} />
            )}
        </div>
    );
}

export default Appointments;