import React, { useContext } from "react";
import UserContext from "@/src/context/UserContext";
import format from "@/src/libs/format";
import FireIcon from "@heroicons/react/24/solid/FireIcon";
const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="avatar-header flex flex-col justify-center items-center p-4">
      <div className="w-[64px] rounded-full overflow-hidden">
        <img alt="avatar" src={`https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`} />
      </div>
      <div className="mt-2 font-semibold">
        <h1 className="text-center">
          {user?.name} - VIP: {user?.vip}
        </h1>
        <h1 className="text-center text-accent">{user?.role}</h1>
        <h1 className="text-error flex justify-center">
          {format.money(user?.money)} <FireIcon className="w-5 h-5" />
        </h1>
      </div>
    </div>
  );
};

export default Avatar;
