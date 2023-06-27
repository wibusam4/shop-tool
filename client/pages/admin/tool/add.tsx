import Input from "@/src/components/Input/Input";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ToolService from "@/src/services/Tool.service";
const Add = () => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
  const [content, setContent] = useState("");
  const [updateNote, setUpdateNot] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    ("use server");
    await ToolService.addTool({ ...data, content: content, updateNote: updateNote });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <LayoutAdmin>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>Thêm Tool Mới</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full px-2">
            <form className="" onSubmit={handleSubmit}>
              <Input label="Tên tool" name="nameTool" type="text" />
              <div className="flex justify-between">
                <Input style="w-[47%]" label="Giá tháng" name="priceMonth" type="number" />
                <Input style="w-[47%]" label="Giá năm" name="priceYear" type="number" />
              </div>
              <div className="flex justify-between">
                <Input style="w-[47%]" label="Server" name="server" type="number" />
                <Input style="w-[47%]" label="Version" name="version" type="text" />
              </div>
              <Input label="Infor" name="infor" type="text" />

              <div className={`form-control `}>
                <label className="label font-semibold">
                  <span className="label-text">Content</span>
                </label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
              </div>

              <div className={`form-control `}>
                <label className="label font-semibold">
                  <span className="label-text">Cập nhật</span>
                </label>
                <ReactQuill theme="snow" value={updateNote} onChange={setUpdateNot} />
              </div>

              <Input label="Link Hình ảnh" name="image" type="text" />
              <Input label="Link Video" name="video" type="text" />
              <div className="form-control mt-6">
                <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
                  <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
                  {`${isLoading ? "" : "Thêm Tool"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Add;
