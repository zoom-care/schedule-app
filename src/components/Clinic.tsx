import React, { FC, useEffect, useState, useContext } from "react";
import useFetch from "use-http";
import AuthContext from "../store/auth-context";
import { Clinic } from "../zoomcare-api";
import "./Clinic.css";

const ClinicComponent: FC<{ clinicId: number }> = ({ clinicId }) => {
  const ctx = useContext(AuthContext);

  const [clinic, setClinic] = useState<Clinic>({
    id: 0,
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const { get, response, loading, error } = useFetch("api", {
    headers: { Authorization: ctx.token },
  });

  useEffect(() => {
    async function loadClinic() {
      const clinic = await get(`/clinics/${clinicId}`);
      if (response.ok) setClinic(clinic);
    }
    loadClinic();
  }, [clinicId, get, response.ok]);

  if (error) {
    return null;
  }

  return (
    <>
      {loading && "Loading..."}
      {clinic.id && (
        <div className="clinic-container">
          <div><h1>{clinic.name}</h1></div>
          <div className="address">{clinic.address}</div>
          <div className="address"> 
            {clinic.city}, {clinic.state} {clinic.zipcode}
          </div>
        </div>
      )}
    </>
  );
};

export default ClinicComponent;
