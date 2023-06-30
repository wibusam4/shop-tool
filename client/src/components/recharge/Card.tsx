import React from "react";
import Input from "../Input/Input";

const Card = () => {
  return (
    <div className="w-full md:p-10">
      <h1 className="uppercase border-l-4 border-success p-2 font-bold text-xl">Nạp Thẻ Cào</h1>
      <div className="max-w-[500px] flex flex-col gap-y-2 bg-error mt-2 rounded border border-error bg-opacity-20 p-4 text-sm font-semibold">
        <p className="py-1">- Bạn sẽ bị khóa tài khoản nếu spam nhiều lần</p>
        <p className="py-1">- Nhập đầy đủ Serial - Mã Thẻ - Mệnh Giá - Nhà Mạng</p>
        <p className="py-1">- Thẻ sẽ được xử lí và nạp tự động</p>
        <p className="py-1">- Nạp sai mệnh giá sẽ bị trừ tiền theo quy định của web</p>
        <p className="py-1">
          - Check chiết khấu, giá trị trừ tiền khi sai mệnh giá tại <a className="link link-primary">thesiere.com</a>
        </p>
      </div>
      <div className="py-4 md:py-5 max-w-[500px] font-semibold">
        <Input label="Serial" type="text" name="serial" />
        <Input label="Mã Thẻ" type="text" name="code" />
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nhà Mạng:</span>
          </label>
          <select name="role" className="select select-bordered">
            <option>VIETTEL</option>
            <option>VINAPHONE</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mệnh giá:</span>
          </label>
          <select name="role" className="select select-bordered">
            <option>10.000</option>
            <option>20.000</option>
            <option>50.000</option>
            <option>100.000</option>
          </select>
        </div>
        <button className="btn btn-success mt-4 w-full">Nạp Thẻ</button>
      </div>
    </div>
  );
};

export default Card;
