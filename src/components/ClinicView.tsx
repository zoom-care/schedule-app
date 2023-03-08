import React from "react";
import "./ClinicView.css";
import { formatTime } from '../utils';
import Images from "../assets/images";
import { IClinic } from "../types/models";

const ClinicView = (props: any) => {
  return (
    <div>
      {props.clinicsData.map((clinic: IClinic, index: Number) => (
        <div className="clinic" key={`key-${index}`}>
          <div className="description">
            <h3>{clinic.name}</h3>
            <div className="address">
              <p>{clinic.address}</p>
              <p>
                {clinic.city}, {clinic.state} {clinic.zipCode}
              </p>
            </div>
          </div>
          <div className="items">
            <img className="logo" alt="" src={Images.clinic}></img>
            <div>
              <p className="name">
                {clinic.providerName}, {clinic.credentials}
              </p>
              <p>{clinic.phoneNumber}</p>
              {clinic.startTimes.map((time: string, i: Number) => (
                <button className="button" key={`key-${index}-${i}`}>
                  {formatTime(time)}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClinicView;
