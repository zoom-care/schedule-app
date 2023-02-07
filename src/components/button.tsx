import React from "react";

import "./styles.css";

interface IProps {
  title: string;
  isDisabled: boolean;
  onClick: () => void;
}

const Button = ({ title, isDisabled, onClick }: IProps) => {
  return (
    <div id="button" className="row">
      <button disabled={isDisabled} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
