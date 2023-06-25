import menus from "@/src/libs/menu-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarAdmin = () => {
  const router = useRouter();
  return (
    <div className="drawer-side z-20">
      <label htmlFor="drawer-left-sidebar" className="drawer-overlay"></label>
      <ul className="menu h-full px-0 pt-2 w-80 bg-base-100 text-base-content [&_li>*]:rounded-none [&_li>*]:py-3 [&_li>*]:text-[16px]">
        <li className="mb-2 font-semibold text-xl">
          <Link href={"/admin"}>
            <img
              className="mask mask-squircle w-10"
              src="https://tailwind-dashboard-template-dashwind.vercel.app/logo192.png"
              alt="DashWind Logo"
            />
            DashBoard
          </Link>{" "}
        </li>
        {menus.map((menu, index) => {
          return (
            <li className="" key={index}>
              <Link
                className={
                  router.pathname === menu.path
                    ? "font-semibold  bg-base-200 "
                    : "font-normal"
                }
                href={menu.path}
              >
                {menu.icon} {menu.name}
                {router.pathname === menu.path ? (
                  <span
                    className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                    aria-hidden="true"
                  ></span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarAdmin;
