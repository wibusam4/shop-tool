import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import Link from "next/link";
import React from "react";

interface MainProps {
  shown: boolean;
  close: any;
}
const InforHome = ({ shown, close }: MainProps) => {
  return (
    <div
      className={`${shown ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} my-modal`}
      onClick={() => close()}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${
          shown ? "scale-100" : "scale-0"
        } my-modal_box w-full md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto max-w-[500px]`}
      >
        <div className="flex justify-between p-3">
          <h1 className="text-lg font-bold uppercase text-error">Thông báo</h1>
          <button className="border border-neutral-800 rounded-full" onClick={() => close()}>
            <XCircleIcon className="w-6 h-6 text-error " />
          </button>
        </div>
        <div className="divider my-0 h-0"></div>
        <div className="p-3 py-5">
          <div className="font-semibold">
            <p className="text-center">Chào mừng bạn tới web tool mới của WibuSama</p>
            <p className="font-normal italic text-error mt-[3px]">
              Những USER ở web cũ còn hạn sử dụng key, key vĩnh viễn inbox zalo, facebook, telegram để được chuyển key
            </p>
            <p className="mt-[3px]">Nếu có bất kì thắc mắc gì hãy qua mục Hướng Dẫn để được giải đáp</p>
            <p className="mt-[3px]">Mình nhận code tool các loại theo yều cầu chi tiết liên hệ ADMIN</p>
            <p className="mt-[3px] text-accent">Tool có bán giá tháng, vĩnh viễn cho m.n thoải mái lựa chọn</p>
            <p className="mt-[3px] text-secondary italic">
              Nghiêm cấm các trường hợp cho mượn key, cho mượn tool, chuyển nhượng tool, nếu bị phát hiện ban User Vĩnh
              Viễn
            </p>
          </div>
        </div>
        <div className="divider my-0 h-0"></div>
        <div className="flex justify-end p-3">
          <button className="btn btn-error btn-sm" onClick={() => close()}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default InforHome;
