import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

interface Menu {
  path: string;
  icon: JSX.Element;
  name: string;
  submenu?: Submenu[];
}

interface Submenu {
  path: string;
  icon: JSX.Element;
  name: string;
}

const menus: Menu[] = [
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
  {
    path: "",
    icon: <Cog6ToothIcon className={`${iconClasses} inline-block`} />,
    name: "Settings",
    submenu: [
      {
        path: "/admin/settings-profile",
        icon: <UserIcon className={submenuIconClasses} />,
        name: "Profile",
      },
      {
        path: "/admin/settings-billing",
        icon: <WalletIcon className={submenuIconClasses} />,
        name: "Billing",
      },
      {
        path: "/admin/settings-team",
        icon: <UsersIcon className={submenuIconClasses} />,
        name: "Team Members",
      },
    ],
  },
  {
    path: "",
    icon: <DocumentTextIcon className={`${iconClasses} inline-block`} />,
    name: "Documentation",
    submenu: [
      {
        path: "/admin/getting-started",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        name: "Getting Started",
      },
      {
        path: "/admin/features",
        icon: <TableCellsIcon className={submenuIconClasses} />,
        name: "Features",
      },
      {
        path: "/admin/components",
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
        name: "Components",
      },
    ],
  },
];

export default menus;
