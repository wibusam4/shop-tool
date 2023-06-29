import Avatar from "@/src/components/User/Avatar";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import Link from "next/link";

const Page = () => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full">
        <div className="flex flex-wrap w-full h-full">
          <div className="sidebar p-4 min-w-[288px] w-auto border-r-2">
            <Avatar />
            <div className="divider mt-0 mb-0"></div>
            <div className="p-4">
              <ul className="font-semibold text-base flex flex-col gap-y-2">
                <Link className="flex gap-1 items-center" href={"/user/profile"}>
                  <UserIcon className="w-4 h-4 mb-[3px]" />
                  Thông tin tài khoản
                </Link>
                <Link className="flex gap-1 items-center" href={"/user/profile"}>
                  <CreditCardIcon className="w-4 h-4 mb-[3px]" />
                  Nạp Thẻ
                </Link>
                <li>Nạp Momo</li>
                <li>Nạp Thẻ Siêu Rẻ</li>
                <li>Quản Lí Tool</li>
                <li>Biến động số dư</li>
              </ul>
            </div>
          </div>

          <div className="sidebar p-4 min-w-[288px]">
            <Avatar />
            <div className="divider mt-0 mb-0"></div>
            <div className="p-4">
              <ul className="font-semibold text-base flex flex-col gap-y-2">
                <Link className="flex gap-1 items-center" href={"/user/profile"}>
                  <UserIcon className="w-4 h-4 mb-[3px]" />
                  Thông tin tài khoản
                </Link>
                <Link className="flex gap-1 items-center" href={"/user/profile"}>
                  <CreditCardIcon className="w-4 h-4 mb-[3px]" />
                  Nạp Thẻ
                </Link>
                <li>Nạp Momo</li>
                <li>Nạp Thẻ Siêu Rẻ</li>
                <li>Quản Lí Tool</li>
                <li>Biến động số dư</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1280px] m-auto"></div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;
