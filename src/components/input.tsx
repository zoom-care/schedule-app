import React from "react";

import "./styles.css";

interface IProps {
  description: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input = ({ description, type, placeholder, onChange }: IProps) => {
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      onChange(e.currentTarget.value);
    }
  };

  return (
    <div className="row">
      <label>{description}</label>
      <input
        onChange={handleChangeValue}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
