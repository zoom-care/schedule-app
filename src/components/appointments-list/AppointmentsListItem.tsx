import { useMemo, useState } from "react";
import { parsePhoneNumber } from "awesome-phonenumber";
import { ClinicAppointment } from "../../zoomcare-api";

interface AppointmentsListItemProps {
    appointment: ClinicAppointment
}

const AppointmentsListItem = ({ appointment }: AppointmentsListItemProps) => {
    const [showAllSlots, setShowAllSlots] = useState<boolean>(false);

    const formattedPhone = useMemo(() => {
        const pn = parsePhoneNumber(appointment.provider.phoneNumber || "");
        return pn.getNumber("national")
    }, [appointment.provider.phoneNumber]);

    const toggleSlotsList = () => {
        setShowAllSlots(!showAllSlots)
    }

    return (
        <div className="appointment">
            <div className="clinic-info">
                <h3 className="title">{appointment.clinic.name}</h3>
                <div>
                    <p>{appointment.clinic.address}</p>
                    <p>{appointment.clinic.city}, {appointment.clinic.state} {appointment.clinic.zipcode}</p>
                </div>
            </div>
            <div className="slot">
                <div className="provider-icon">
                    <img width={60} src="stethoscope.svg" />
                </div>
                <div>
                    <h3 className="title textPrimary">{appointment.provider.name}, {appointment.provider.credentials}</h3>
                    <p>{formattedPhone}</p>
                    <div className="availableTimes">
                        {appointment.availableTimes.map((item, index) => (
                            <button key={index} className={`bookingBtn ${index > 5 ? (showAllSlots ? "show" : "hidden") : ""}`}>{item}</button>
                        ))}
                    </div>
                    {(appointment.availableTimes.length > 5) && (
                        <button
                            className="toggler"
                            onClick={toggleSlotsList}
                        >{!showAllSlots ? "Show All Slots" : "Show Less Slots"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AppointmentsListItem;