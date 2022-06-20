import { Clinic } from "../../zoomcare-api";
import './Clinic.css';

const ClinicComp = ({ name, address } : Clinic) => {
    if(!name) return <div><h3>Clinic not found</h3></div>
    return (
        <div className="clinic-container">
            <h3>{name}</h3>
            <h6>{address}</h6>
        </div>
    )
}

export default ClinicComp;