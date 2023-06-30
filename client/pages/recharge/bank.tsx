import Avatar from "@/src/components/User/Avatar";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import Link from "next/link";
import menu from "@/src/libs/menu";
import { AuthService } from "@/src/services/Auth.service";
import Bank from "@/src/components/recharge/Bank";

const Page = () => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full flex">
        <div className="flex flex-wrap w-full max-w-[1280px] mx-auto">
          <div className="sidebar p-4 w-full md:w-[30%] md:border-x-2">
            <Avatar />
            <div className="divider mt-0 mb-0"></div>
            <div className="p-4">
              <ul className="font-semibold text-base flex flex-col gap-y-4">
                {menu.sidebarPro5().map((menu, index) => {
                  return (
                    <Link
                      onClick={() => {
                        menu.name === "Đăng Xuất" ? AuthService.logOut() : null;
                      }}
                      key={index}
                      className="flex gap-1 items-center hover:text-info duration-300"
                      href={menu.path}
                    >
                      {menu.icon} {menu.name}
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div className="divider mt-0 mb-0 md:hidden"></div>
          </div>

          <div className="sidebar p-4 w-full md:w-[70%]">
            <Bank />
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;
