import React, { useState } from "react";

interface MainProps {
  style?: string;
  label: string;
  type: string;
  name: string;
  data?: string | number;
}
const Input: React.FC<MainProps> = ({ label, type, name, style, data }) => {
  const [value, setValue] = useState(data);
  return (
    <div className={`form-control ${style}`}>
      <label className="label font-semibold">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={label.toLowerCase()}
        onChange={(event) => setValue(event.target.value)}
        className="input border-neutral-400"
      />
    </div>
  );
};

export default Input;
