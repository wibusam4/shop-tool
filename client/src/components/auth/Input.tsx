import React from "react";

interface MainProps {
  style?: string;
  label: string;
  type: string;
  name: string;
}
const Input: React.FC<MainProps> = ({ label, type, name, style }) => {
  return (
    <div className={`form-control ${style}`}>
      <label className="label font-semibold">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={label.toLowerCase()}
        className="input input-bordered"
      />
    </div>
  );
};

export default Input;
