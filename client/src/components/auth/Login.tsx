import Link from "next/link";
import Input from "../Input/Input";
import { useState } from "react";
import { AuthService } from "@/src/services/Auth.service";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await AuthService.login({
      email: data.email as string,
      password: data.password as string,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className={`flex shadow-2xl bg-base-100 w-full max-w-3xl m-auto`}>
      <form className="card-body w-full md:w-1/2" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold">Đăng Nhập</h1>
        <Input label="Email" name="email" type="text" />
        <Input label="Mật khẩu" name="password" type="password" />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Quên mật khẩu?
          </a>
        </label>
        <div className="form-control mt-6">
          <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
            <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
            {`${isLoading ? "" : "Đăng nhập"}`}
          </button>
        </div>
        <div className="divider">HOẶC</div>
        <div className="form-control mt-2">
          <Link href="/auth/register" className="btn btn-error">
            Đăng Kí
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

export default Login;
