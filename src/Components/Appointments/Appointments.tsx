import { useEffect, useState } from "react";
import useSWR from "swr";
import { useUser } from "../../ContextProviders/UserProvider/UserProvider";
import matchData from "../../Helpers/matchData";
import AppointmentService from "../../Services/Appointments/AppointmentService";
import ClinicService from "../../Services/Clinics/ClinicService";
import { IMappedData } from "../../zoomcare-api";
import ClinicComp from "../Clinic/Clinic";
import './Appointments.css';
import img from '../../assets/images/icon-estetoscopio.png';
import dateFormatter from "../../Helpers/dateFormatter";
const headerObj = { 'Authorization': '' };

const Appointments = () => {
    const [mappedData, setMappedData] = useState([] as IMappedData[]);

    const { user } = useUser();
    headerObj['Authorization'] = user?.authToken || '';

    const { data: providers, error: errorProviders } = useSWR(user && !mappedData.length ? ['/api/appointments', headerObj] : null, AppointmentService.getAll);
    const { data: clinics, error: errorClinics } = useSWR(user && !mappedData.length ? ['/api/clinics', headerObj] : null, ClinicService.getAll);

    useEffect(() => {
        const fetchClinics = async () => {
            if (providers && clinics) setMappedData(() => matchData(providers, clinics));
        }

        fetchClinics();

    }, [providers, clinics]);

    if (!user) return <h2>You are not authorized</h2>;

    if (errorProviders) return <span>We got an error getting providers: {errorProviders}</span>
    if (errorClinics) return <span>We got an error getting clinics: {errorClinics}</span>

    return (
        <>
            {
                mappedData?.map((providerElem: IMappedData) => (
                    <div key={providerElem.id} className="appointments-container">
                        <ClinicComp {...providerElem.clinic} />
                        <div className="provider-container">
                            <img src={img} className='provider-img' alt='provider-img' />
                            <div className="provider-content">
                                <h3 className="provider-name">{`${providerElem.provider.name}, ${providerElem.provider.credentials}`}</h3>
                                <h6>{providerElem.provider.phoneNumber}</h6>
                                <div className="appointments-slots-button">
                                    <button>{dateFormatter(providerElem.startTime)}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )

}

export default Appointments;