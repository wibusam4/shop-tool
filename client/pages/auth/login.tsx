import Login from "@/src/components/auth/Login";
import AuthLayout from "@/src/components/layouts/AuthLayout";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import React from "react";

const login = () => {
  return (
    <LayoutMain>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </LayoutMain>
  );
};

export default login;
