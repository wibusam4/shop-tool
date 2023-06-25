import config from ".";
import axios from "axios";
import Router from "next/router";
import { AuthForm } from "../type";
import { toast } from "react-hot-toast";
import { setCookie } from "cookies-next";
import validate from "../libs/validate";

export const AuthAction = {
  login: async (data: AuthForm) => {
    if (data.email === "" || !validate.email(data.email as string)) {
      toast.error("Vui lòng nhập tài khoản!");
    }
    if (data.password === "") {
      toast.error("Vui lòng nhập tài khoản!");
    }
    try {
      const response = await axios(config("post", "/auth/login", "", data));
      if (!response.data.success) return toast.error(response.data.message);
      setCookie("token", response.data.message.token);
      toast.success("Đăng nhập thành công");
      Router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra");
    }
  },

  register: async (data: AuthForm) => {
    if (!validate.string(data.name as string, 4, 10)) {
      toast.error("Tên từ 4-10 kí tự không khoảng trắng!");
      return false;
    }
    if (!validate.email(data.email as string)) {
      toast.error("Email không đúng định dạng!");
      return false;
    }
    if (data.password == "") {
      toast.error("Vui lòng nhập mật khẩu!");
      return false;
    }
    if (data.passwordConfirm == "") {
      toast.error("Vui lòng nhập mật khẩu xác nhận!");
      return false;
    }
    if (data.password != data.passwordConfirm) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return false;
    }
    try {
      const response = await axios(config("post", "/auth/register", "", data));
      if (!response.data.success) return toast.error(response.data.message);
      setCookie("token", response.data.message.token);
      toast.success("Đăng kí thành công");
      Router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra");
    }
  },

  changePass: async (values: any, token: string) => {
    if (
      !values.currentPassword ||
      !values.newPassword ||
      !values.confirmPassword
    ) {
      toast.error("Điền đủ thông tin!");
      return false;
    }
  },
};
