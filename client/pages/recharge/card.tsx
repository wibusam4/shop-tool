import Avatar from "@/src/components/User/Avatar";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import Link from "next/link";
import menu from "@/src/libs/menu";
import { AuthService } from "@/src/services/Auth.service";
import Card from "@/src/components/recharge/Card";
import Sidebar from "@/src/components/User/Sidebar";

const Page = () => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full flex">
        <div className="flex flex-wrap w-full mx-auto">
          <div className="sidebar p-4 w-full md:w-[30%] md:border-x-2">
            <Sidebar />
          </div>

          <div className="sidebar p-4 w-full md:w-[70%]">
            <Card />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;
