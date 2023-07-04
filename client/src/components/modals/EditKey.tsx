import format from "@/src/libs/format";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import Input from "../Input/Input";
import Link from "next/link";
import { useState } from "react";
import Button from "../button/Button";
import UserService from "@/src/services/User.service";

interface MainProps {
  handle: Function;
  data: any;
  showModal: boolean;
}
const EditKey = ({ handle, data, showModal }: MainProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const key = Object.fromEntries(formData);
    await UserService.editKey(key, data.toolId, data.id);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <div
      className={`${
        showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } flex items-center justify-center fixed inset-0 w-full h-full z-20 bg-neutral-900 bg-opacity-25 transition-opacity duration-200 overflow-y-auto`}
    >
      <div
        className={`${
          showModal ? "scale-100" : "scale-0"
        } relative w-full md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto bg-base-100 transition-transform duration-200 rounded shadow-md`}
      >
        <div className="flex justify-between p-3">
          <h1 className="text-lg font-bold">Sửa Key</h1>
          <button className="border border-neutral-800 rounded-full" onClick={() => handle(false)}>
            <XCircleIcon className="w-6 h-6 text-error " />
          </button>
        </div>
        <div className="divider my-0 h-0"></div>
        <div className="p-3 py-5">
          <h1 className="font-semibold">
            {data?.tool?.nameTool} - <span className="italic">ID: #{data?.id}</span>
          </h1>
          <h1 className="font-semibold mt-2 text-error italic">
            Thời gian sửa key: {format.convertTime(data?.updatedAt)}
          </h1>
          <form className="mt-2" onSubmit={handleSubmit}>
            <Input label="Nhập key" name="key" type="string" />
            <Button style="btn-success mt-2 w-full" isLoading={isLoading} disable={isLoading}>
              Sửa Key
            </Button>
          </form>
          <div className="divider"></div>
          <div>
            <ul className="font-semibold list-decimal list-inside">
              <span className="uppercase text-error">Lưu Ý:</span>
              <li>-Bạn chỉ có thể sửa key sau 24h đối với lần sửa gần nhất</li>
              <li>-Tùy vào cấp độ VIP mà có thể sửa nhanh hơn</li>
              <li className="text-accent">
                -Không dùng tool lấy key của web khác, nếu phát hiện key không hợp lệ ban luôn
              </li>
              <li>
                -Qua mục{" "}
                <Link href={"/help"} className="link link-secondary">
                  Hướng Dẫn
                </Link>{" "}
                nếu có bất kì thắc mắc gì
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditKey;
