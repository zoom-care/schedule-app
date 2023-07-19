import React, { FC } from "react";
import { ReactComponent as StethoscopeSVG } from "../assets/stethoscope.svg";
import "./StethoscopeIcon.css";

const StethoscopeIcon: FC = () => {
  return (
    <div className="container">
      <StethoscopeSVG />
    </div>
  );
};

export default StethoscopeIcon;
