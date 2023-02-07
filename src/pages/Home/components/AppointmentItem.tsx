import React, { useEffect, useState } from "react";

import { parsePhoneNumber } from "awesome-phonenumber";

import { ApiError, AppointmentSlot, Clinic } from "../../../zoomcare-api";
import { useAuthContext } from "../../../context/context";
import { getClinics } from "../../../services/apis";
import { ICONS } from "../../../constants/constants";
import { Error, Loading } from "../../../components";
import { extractTimeslots } from "../../../utils";

import "./styles.css";

interface IPros {
  data: AppointmentSlot;
}

const AppointmentItem = ({ data }: IPros) => {
  const { token } = useAuthContext();
  const [clinics, setClinics] = useState<Clinic>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGetError, setIsGetError] = useState<boolean>(false);
  const [timeSlot, setTimeSlot] = useState<Array<string>>([]);
  const [phonenumber, setPhoneNumber] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<Array<string>>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const clinicsResult: Clinic | ApiError = await getClinics(
        data.clinicId,
        token
      );
      if ("error" in clinicsResult) {
        setIsGetError(true);
      } else {
        setClinics(clinicsResult);
      }
    } catch (error) {
      console.log("clinics api call error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTimeSlots = () => {
    const result = extractTimeslots(data.startTime, data.durationInMinutes);
    setTimeSlot(result);
  };

  const formatPhoneNumber = () => {
    const phonenumber = parsePhoneNumber(data.provider.phoneNumber || "").number
      ?.national;
    if (phonenumber) {
      setPhoneNumber(phonenumber);
    }
  };

  useEffect(() => {
    loadData();
    getTimeSlots();
    formatPhoneNumber();
  }, []);

  return (
    <>
      {isGetError ? (
        <Error />
      ) : (
        <div className="container">
          {isLoading && <Loading />}
          <div className="appointment">
            <div className="clinic-info">
              <h3 className="title">{clinics?.name}</h3>
              <div>
                <p>{clinics?.address}</p>
                <p>
                  {clinics?.city}, {clinics?.state} {clinics?.zipcode}
                </p>
              </div>
            </div>
            <div className="slot">
              <div className="provider-icon">
                <img width={60} src={ICONS.STETHOSCOPE} alt="img" />
              </div>
              <div>
                <h3 className="title textPrimary">
                  {data.provider.name}, {data.provider.credentials}
                </h3>
                <p>{phonenumber}</p>
                <div className="availableTimes">
                  {timeSlot.map((item, index) => (
                    <button key={index} className="bookingBtn">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentItem;
