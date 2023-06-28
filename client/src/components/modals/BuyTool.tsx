import Link from "next/link";
import Input from "../Input/Input";
import format from "@/src/libs/format";
import React, { useContext, useMemo } from "react";
import UserContext from "@/src/context/UserContext";
import StarIcon from "@heroicons/react/24/solid/StarIcon";

interface MainProps {
  type: number;
  tool: Tool;
}

interface ChildProps {
  children: React.ReactNode;
  title: string;
}

const Table: React.FC<ChildProps> = ({ children, title }) => {
  return (
    <div className="flex">
      <p className="w-1/2">{title}</p>
      <p className="w-1/2">{children}</p>
    </div>
  );
};

const BuyTool: React.FC<MainProps> = ({ tool, type }) => {
  const price = useMemo(() => (type == 1 ? tool.priceMonth : tool.priceYear), [type]);
  const { user } = useContext(UserContext);
  return (
    <dialog id="modal_buy_tool" className="modal">
      <form method="dialog" className="modal-box bg-base-100 p-0 rounded">
        <div className="flex items-center justify-between p-4 pb-0">
          <h3 className="font-medium text-lg text-secondary">Xác nhận đơn hàng</h3>
          <button className="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        <div className="divider mt-0 mb-0"></div>
        <div className="p-4">
          <p className="text-base">Thông tin đơn hàng</p>
          <div className="divider mt-0 mb-0"></div>
          <Table title="Tên tool: ">{tool.nameTool}</Table>
          <div className="divider mt-0 mb-0"></div>
          <Table title="Giá: ">
            <span className="flex gap-x-[2px]">
              {format.money(price)}
              <StarIcon className="w-5 h-5 text-warning" />
            </span>
          </Table>
          <div className="divider mt-0 mb-0"></div>
          <Table title="Hạn sử dụng: ">{type == 1 ? "1 tháng" : "1 năm"}</Table>
          <div className="divider mt-0 mb-0"></div>
          <Input label="Mã giảm giá" name="coupon" type="text" />
          <div className="divider mt-0 mb-0"></div>
          <div className="flex justify-end">
            {!user ? (
              <Link href={"/auth/login"} className="btn btn-error">
                Đăng Nhập
              </Link>
            ) : null}
            {user && user.money < price ? (
              <Link href={"/user/recharge"} className="btn btn-warning">
                Nạp Tiền
              </Link>
            ) : null}
            {user && user.money > price ? <button className="btn btn-success">Mua ngay</button> : null}
          </div>
          <div className="divider mt-0 mb-0"></div>
          <div>
            <h2 className="text-error">Lưu ý:</h2>
            <ul className="list-disc list-inside text-primary">
              <li className="text-error">Bạn sẽ không được hoàn tiền nếu tool không đúng như yêu cầu</li>
              <li>Đảm bảo bạn đã đọc kĩ mô tả và chức năng tool</li>
              <li>Đảm bảo bạn đã xem video demo</li>
              <li>Đảm bảo bạn đã chọn đúng thời gian mua</li>
            </ul>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default BuyTool;
