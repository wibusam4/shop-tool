import LayoutMain from "@/src/components/layouts/LayoutMain";
import Profile from "@/src/components/User/Profile";
import { useRouter } from "next/router";
import Sidebar from "@/src/components/User/Sidebar";

const Page = () => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full flex">
        <div className="flex flex-wrap w-full  mx-auto">
          <div className="sidebar p-4 w-full md:w-[30%] md:border-x-2">
            <Sidebar />
          </div>
          <div className="sidebar p-4 flex-auto">
            <Profile />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;
