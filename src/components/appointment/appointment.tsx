import React from "react";
import "./appointment.css";
import { useFetchData } from "../../hooks/useFetchData";

export const Appointment = () => {
  //Getting the initial info...
  const { data, isLoading } = useFetchData();
  console.log("MainModel", data);

  if (isLoading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <section className="appointment-container">
        {/* This is responsive :D */}
        {data.map((item) => (
          <div key={item.appointment.id} className="item-container">
            <div className="row pb-4">
              <div className="col-12 col-sm-12 col-md-6">
                <h1 className="clinic-name">{ item.clinic.name }</h1>
                <p className="">
                { item.clinic.address } <br />
                { item.clinic.city }, { item.clinic.state.slice(0,2).toUpperCase() } { item.clinic.zipcode }
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-2 align-self-center">
                <img className="img" src="provider.png" alt="provider" />
              </div>
              <div className="col-6 col-sm-6 col-md-3 align-self-center">
                <p className="provider-name">{ item.appointment.provider.name }, { item.appointment.provider.credentials }</p>
                <p className="">{ item.appointment.provider.phoneNumber }</p>
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-2">
                    <button className="btn">{ item.appointment.startTime }</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
};
