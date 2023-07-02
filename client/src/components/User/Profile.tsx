import React, { useContext } from "react";
import UserContext from "@/src/context/UserContext";
import format from "@/src/libs/format";
import FireIcon from "@heroicons/react/24/solid/FireIcon";

interface ChildProps {
  title: string;
  color?: string;
  children: React.ReactNode;
}
const Table = ({ title, color, children }: ChildProps) => {
  return (
    <div className="flex mt-4">
      <p className="w-1/2">{title}</p>
      <p className={`w-1/2 ${color}`}>{children}</p>
    </div>
  );
};
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full md:p-10">
      <h1 className="uppercase border-l-4 border-success p-2 font-bold text-xl">Thông tin tài khoản</h1>
      <div className="py-4 md:py-10 max-w-[500px] font-semibold">
        <Table title="ID:" color="text-success">
          #{user?.id}
        </Table>
        <Table title="Tên tài khoản:">{user?.name}</Table>
        <Table title="Email:" color="text-info">
          {user?.email}
        </Table>
        <Table title="Số dư:" color="text-error">
          <span className="text-error flex">
            {format.money(user?.money)} <FireIcon className="w-5 h-5" />
          </span>
        </Table>
        <Table title="Chức vụ:">{user?.role}</Table>
        <Table title="Vip:">{user?.vip}</Table>
      </div>
    </div>
  );
};

export default Profile;
