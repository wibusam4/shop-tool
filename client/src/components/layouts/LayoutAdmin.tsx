import SidebarAdmin from "./SidebarAdmin";
import HeaderAdmin from "./HeaderAdmin";

interface MainProps {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open h-screen">
      <input
        id="drawer-left-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col min-h-full overflow-x-auto">
        <HeaderAdmin />
        <main className="flex-1 overflow-y-auto pt-6 px-4 md:px-6 bg-base-200 h-full">
          {children}
          <div className="h-16"></div>
        </main>
      </div>
      <SidebarAdmin />
    </div>
  );
};

export default LayoutAdmin;
