import FooterMain from "./FooterMain";
import HeaderMain from "./HeaderMain";

import UserProvider from "@/src/context/UserProvider";
interface MainProps {
  children: React.ReactNode;
}

const LayoutMain: React.FC<MainProps> = ({ children }) => {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <HeaderMain />
        <main className="flex-auto flex p-4 md:p-10">{children}</main>
        <FooterMain />
      </div>
    </UserProvider>
  );
};

export default LayoutMain;
