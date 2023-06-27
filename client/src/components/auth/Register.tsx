import Link from "next/link";
import Input from "../Input/Input";
import { useState } from "react";
import { AuthService } from "@/src/services/Auth.service";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await AuthService.register({
      name: data.name,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <div className={`flex shadow-2xl bg-base-100 w-full max-w-5xl m-auto`}>
      <form className="card-body w-full md:w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold">Đăng Kí</h1>
        <Input label="Tên người dùng" name="name" type="text" />
        <Input label="Email" name="email" type="text" />
        <Input label="Mật khẩu" name="password" type="password" />
        <Input label="Mật khẩu xác nhận" name="passwordConfirm" type="password" />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Quên mật khẩu?
          </a>
        </label>
        <div className="form-control mt-6">
          <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
            <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
            {`${isLoading ? "" : "Đăng Kí"}`}
          </button>
        </div>
        <div className="divider">HOẶC</div>
        <div className="form-control mt-2">
          <Link href="/auth/login" className="btn btn-error">
            Đăng Nhập
          </Link>
        </div>
      </form>
      <img
        src="https://getimg.ai/_next/image?url=https%3A%2F%2Fimg.getimg.ai%2Fgenerated%2Fimg-srAjHD09RFCqRIBdLGYPJ8.jpeg&w=828&q=75"
        alt=""
        className="hidden md:block w-1/2 object-cover"
      />
    </div>
  );
};

export default Register;
