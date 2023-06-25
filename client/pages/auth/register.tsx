import Register from "@/src/components/auth/Register";
import AuthLayout from "@/src/components/layouts/AuthLayout";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import React from "react";

const register = () => {
  return (
    <LayoutMain>
      <AuthLayout>
        <Register />
      </AuthLayout>
    </LayoutMain>
  );
};

export default register;
