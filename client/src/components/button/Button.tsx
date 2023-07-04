import React from "react";

interface MainProps {
  style?: string;
  isLoading?: boolean;
  disable?: boolean;
  children?: React.ReactNode;
}
const Button = ({ style, isLoading, disable, children }: MainProps) => {
  return (
    <button className={`btn ${style}`} disabled={disable}>
      {isLoading ? <span className="loading loading-spinner"></span> : children}
    </button>
  );
};

export default Button;
