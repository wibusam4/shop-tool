import React, { useContext } from "react";
import UserContext from "@/src/context/UserContext";
const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="avatar-header flex flex-col justify-center items-center p-4">
      <div className="w-[64px] rounded-full overflow-hidden">
        <img alt="avatar" src={`https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`} />
      </div>
      <div className="mt-2 font-semibold">
        <h1>
          {user?.name} - VIP: {user?.vip}
        </h1>
        <h1 className="text-center text-error">{user?.role}</h1>
      </div>
    </div>
  );
};

export default Avatar;
