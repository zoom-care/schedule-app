import React from "react";
import "./ProviderView.css";

import logo from "../../../assets/images/provider.png";

const ProviderView = (props: any) => {
  return (
    <div>
      {props.providersData.map((provider: any, index: Number) => (
        <div className="clinic" key={`key-${index}`}>
          <div className="description">
            <h4>{provider.name}</h4>
            <div className="address">
              <p>{provider.address}</p>
              <p>
                {provider.city}, {provider.state} {provider.zipCode}
              </p>
            </div>
          </div>
          <div className="provider">
            <img className="logo" alt="" src={logo}></img>
            <div>
              <p className="name">
                {provider.providerName}, {provider.credentials}
              </p>
              <p>{provider.phoneNumber}</p>
              {provider.startTimes.map((time: string, i: Number) => (
                <button className="button" key={`key-${index}-${i}`}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProviderView;
