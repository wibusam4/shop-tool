import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import WrenchScrewdriverIcon from "@heroicons/react/24/outline/WrenchScrewdriverIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import ShoppingCartIcon from "@heroicons/react/24/outline/ShoppingCartIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CreditCardIcon from "@heroicons/react/24/solid/CreditCardIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/solid/ArrowRightOnRectangleIcon";
import { AuthService } from "../services/Auth.service";

let iconClasses = `h-6 w-6`;

const menu = {
  sidebarAdmin: (): Menu[] => {
    return [
      {
        path: "/admin",
        icon: <Squares2X2Icon className={iconClasses} />,
        name: "Dashboard",
      },
      {
        path: "/admin/tool",
        icon: <InboxArrowDownIcon className={iconClasses} />,
        name: "Danh Sách Tool",
      },
      {
        path: "/admin/user",
        icon: <UsersIcon className={iconClasses} />,
        name: "Thành Viên",
      },
      {
        path: "/admin/his-tool",
        icon: <ShoppingBagIcon className={iconClasses} />,
        name: "Giao Dịch Tool",
      },
      {
        path: "/admin/transaction",
        icon: <BoltIcon className={iconClasses} />,
        name: "Dòng Tiền",
      },
      {
        path: "/admin/log",
        icon: <TableCellsIcon className={iconClasses} />,
        name: "Log",
      },
    ];
  },

  sidebarPro5: (): Menu[] => {
    iconClasses = "h-5 w-5";
    return [
      {
        path: "/user/profile",
        icon: <UserIcon className={iconClasses} />,
        name: "Thông tin cá nhân",
      },
      {
        path: "/recharge/card",
        icon: <CreditCardIcon className={iconClasses} />,
        name: "Nạp Thẻ",
      },
      {
        path: "/recharge/bank",
        icon: <WalletIcon className={iconClasses} />,
        name: "Nạp Ví",
      },
      {
        path: "/user/license",
        icon: <WrenchScrewdriverIcon className={iconClasses} />,
        name: "Quản Lí License",
      },
      {
        path: "/user/balance",
        icon: <ShoppingCartIcon className={iconClasses} />,
        name: "Dòng Tiền",
      },
      {
        path: "#",
        icon: <ArrowRightOnRectangleIcon className={iconClasses} />,
        name: "Đăng Xuất",
      },
    ];
  },
};

export default menu;
