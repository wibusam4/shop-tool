import Avatar from "@/src/components/User/Avatar";
import Link from "next/link";
import menu from "@/src/libs/menu";
import { AuthService } from "@/src/services/Auth.service";
import { useRouter } from "next/router";
import BarsArrowDownIcon from "@heroicons/react/24/solid/BarsArrowDownIcon";
import BarsArrowUpIcon from "@heroicons/react/24/solid/BarsArrowUpIcon";
import { useState } from "react";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const route = useRouter();
  return (
    <>
      <Avatar />
      <div className="divider mt-0 mb-0"></div>
      <div className="p-2 md:p-4">
        <div
          className="flex justify-between md:hidden p-2 w-full bg-neutral-800 rounded mb-2"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <h1 className="font-bold text-base-100 text-lg">Menu (Click)</h1>
          {showMenu ? (
            <BarsArrowUpIcon className="w-7 h-7 text-success" />
          ) : (
            <BarsArrowDownIcon className="w-7 h-7 text-error" />
          )}
        </div>
        <ul
          className={`${
            showMenu ? "h-[224px]" : "h-0 md:h-full"
          } overflow-hidden font-semibold text-base flex flex-col gap-y-4 transition-all `}
        >
          {menu.sidebarPro5().map((menu, index) => {
            return (
              <Link
                onClick={() => {
                  menu.name === "Đăng Xuất" ? AuthService.logOut() : null;
                }}
                className={`${
                  menu.path === route.asPath ? "text-primary" : ""
                } flex gap-1 items-center hover:text-primary duration-300 relative group max-w-fit`}
                href={menu.path}
                key={index}
              >
                {menu.icon} {menu.name}
                <span
                  className={`${menu.path === route.asPath ? "w-full" : ""} hover-effect w-0 group-hover:w-full`}
                ></span>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="divider mt-0 mb-0 md:hidden"></div>
    </>
  );
};

export default Sidebar;
