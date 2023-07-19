import React, { FC } from "react";
import { Provider } from "../zoomcare-api";
import StethoscopeIcon from "./StethoscopeIcon";
import "./Provider.css";

const ProviderComponent: FC<{ provider: Provider }> = ({
  provider,
  children,
}) => {
  return (
    <div className="provider-container">
      <div>
        <StethoscopeIcon />
      </div>
      <div id={"provider-" + provider.id} className="provider-info">
        <div>
          <h1>
            {provider.name}, {provider.credentials}
          </h1>
        </div>
        <div>
          <p>{provider.phoneNumber}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ProviderComponent;
