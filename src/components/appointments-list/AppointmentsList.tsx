import { ClinicAppointment } from "../../zoomcare-api";
import AppointmentsListItem from "./AppointmentsListItem";

interface AppointmentsListProps {
    appointmentsList: ClinicAppointment[]
}

const AppointmentsList = ({ appointmentsList }: AppointmentsListProps) => {
    return (
        <div className="appointments">
            {appointmentsList.map((item) => (
                <AppointmentsListItem key={item.id} appointment={item} />
            ))
            }
            {(appointmentsList.length === 0) && (
                <div className="emptyAppointments">
                    <p>No Appointment Found at the moment.</p>
                </div>
            )

            }
        </div>
    )
}

export default AppointmentsList;