import React from "react";

interface MainProps {
  children: React.ReactNode;
  color: string;
}
const CardChart = ({ children, color }: MainProps) => {
  return (
    <div className="p-1 w-1/2 md:w-1/4">
      <div className={`${color} flex flex-col justify-center items-center font-bold py-4 rounded`}>{children}</div>
    </div>
  );
};

export default CardChart;
