import UserContext from "@/src/context/UserContext";
import React, { useContext } from "react";

const Bank = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full md:p-10">
      <h1 className="uppercase border-l-4 border-success p-2 font-bold text-xl">Nạp Ví</h1>
      <div className="mt-4 shadow-md rounded border border-neutral-300 flex flex-wrap p-4">
        <div className="w-full xl:w-1/2 p-3">
          <div className="flex items-center w-full justify-center py-2">
            <img
              className="object-cover h-20"
              src="https://avatars.githubusercontent.com/u/36770798?s=200&v=4"
              alt=""
            />
          </div>
          <div className="text-center  mt-2">
            <div className="flex">
              <span className="w-1/2 px-4 text-right">SĐT:</span>
              <span className="w-1/2 px-1 text-left  font-semibold text-secondary">0367.258.861</span>
            </div>
            <div className="divider mt-0 mb-0"></div>
            <div className="flex">
              <span className="w-1/2 px-4 text-right">Chủ Tài Khoản:</span>
              <span className="w-1/2 px-1 text-left font-semibold">VĂN CƯỜNG</span>
            </div>
            <div className="divider mt-0 mb-0"></div>
            <div className="flex">
              <span className="w-1/2 px-4 text-right">Nội dung:</span>
              <span className="w-1/2 px-1 text-left font-semibold text-error">wibu_{user?.id}</span>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 p-3">
          <div className="flex items-center w-full justify-center py-2">
            <img
              className="object-cover h-20 rounded"
              src="https://warnrbros.com/wp-content/uploads/2023/03/thesieure.png"
              alt=""
            />
          </div>
          <div className="text-center mt-2">
            <div className="flex">
              <span className="w-1/2 px-4 text-right">Tài Khoản:</span>
              <span className="w-1/2 px-1 text-left  font-semibold text-secondary">wibusama</span>
            </div>
            <div className="divider mt-0 mb-0"></div>
            <div className="flex">
              <span className="w-1/2 px-4 text-right">Chủ Tài Khoản:</span>
              <span className="w-1/2 px-1 text-left font-semibold">VĂN CƯỜNG</span>
            </div>
            <div className="divider mt-0 mb-0"></div>
            <div className="flex">
              <span className="w-1/2 px-4 text-right">Nội dung:</span>
              <span className="w-1/2 px-1 text-left font-semibold text-error">wibu_{user?.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
