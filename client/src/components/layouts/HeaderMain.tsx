import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/src/context/UserContext";
import format from "@/src/libs/format";
import { AuthService } from "@/src/services/Auth.service";
import FireIcon from "@heroicons/react/24/solid/FireIcon";
const HeaderMain = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="header-main bg-base-300 shadow-md z-10 sticky top-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-neutral-300 border border-neutral-900 font-semibold"
            >
              <li>
                <Link href={"/"}>Trang Chủ</Link>
              </li>
              <li>
                <a>Tool</a>
                <ul className="p-2">
                  <li>
                    <Link href={"/tool"}>Tea Mobile</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Nạp Tiền</a>
                <ul className="p-2">
                  <li>
                    <Link href={"/recharge/card"}>Nạp Thẻ</Link>
                  </li>
                  <li>
                    <Link href={"/recharge/bank"}>Nạp Ví</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/help"}>Hướng Dẫn</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="font-title inline-flex text-lg md:text-2xl">
            <img src="/logo.png" className="object-fill max-h-[40px]" alt="toolwibu.me" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base">
            <li>
              <Link href={"/"}>Trang chủ</Link>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={0} className="">
                Tool
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
                <li>
                  <Link href={"/tool/"}>Server TeaMobile</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={1} className="">
                Nạp tiền
              </label>
              <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                <li>
                  <Link href={"/recharge/card"}>Nạp thẻ</Link>
                </li>
                <li>
                  <Link href={"/recharge/bank"}>Nạp Ví</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"/help"}>Hướng dẫn</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="avatar" src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content font-semibold bg-neutral-300 rounded-box w-52 border border-neutral-900 gap-y-2"
              >
                <li className="bg-accent rounded-box">
                  <a>{user.email}</a>
                </li>
                <li>
                  <Link href={"/user/profile"} className="justify-between">
                    Tài khoản
                    <span className="badge badge-warning">VIP {user.vip}</span>
                  </Link>
                </li>
                <li>
                  <a className="justify-between">
                    Số dư
                    <span className="badge items-start">
                      {format.money(user.money)}
                      <FireIcon className="w-4 h-4 text-error" />
                    </span>
                  </a>
                </li>
                {user.role === "ADMIN" ? (
                  <li>
                    <Link href={"/admin"}>Dashboard</Link>
                  </li>
                ) : null}
                <li
                  onClick={() => {
                    AuthService.logOut();
                  }}
                >
                  <a>Đăng xuất</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link href={`/auth/login`} className="btn btn-error btn-sm md:btn-md text-xs md:text-sm">
              Đăng Nhập
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
