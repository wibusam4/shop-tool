import React from "react";
import Input from "../Input/Input";

const ModalTool = () => {
  return (
    <dialog id="modal_tool" className="modal">
      <form method="dialog" className="modal-box max-w-5xl bg-base-300">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>

        <h3 className="font-bold text-lg">Thêm Tool</h3>
        <div className="divider mt-0 mb-0"></div>
        <Input label="Tên tool" name="nameTool" type="text" />
        <div className="flex justify-between">
          <Input
            style="w-[47%]"
            label="Giá tháng"
            name="priceMonth"
            type="number"
          />
          <Input
            style="w-[47%]"
            label="Giá năm"
            name="priceYear"
            type="number"
          />
        </div>
        <div className="flex justify-between">
          <Input style="w-[47%]" label="Server" name="server" type="number" />
          <Input style="w-[47%]" label="Version" name="version" type="text" />
        </div>
        <Input label="Infor" name="infor" type="text" />
        <Input label="Content" name="content" type="text" />
        <Input label="Cập nhật" name="updateNote" type="text" />
        <Input label="Hình ảnh" name="image" type="text" />
        <Input label="Video" name="video" type="text" />
      </form>
    </dialog>
  );
};

export default ModalTool;
