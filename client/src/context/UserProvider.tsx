// UserProvider.tsx
import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import UserAction from "../actions/User.action";
import {  deleteCookie, hasCookie } from "cookies-next";
interface MainProps {
  children: React.ReactNode;
}
const UserProvider: React.FC<MainProps> = ({ children }): JSX.Element => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const user = await UserAction.getInfor();
    setUser(user);
  };

  useEffect(() => {
    if (hasCookie("token")) getUser();
    else if (hasCookie("role")) deleteCookie("role");
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
