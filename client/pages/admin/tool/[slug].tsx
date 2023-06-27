import Input from "@/src/components/Input/Input";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import ToolService from "@/src/services/Tool.service";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

interface MainProps {
  tool: Tool;
}
const Page: React.FC<MainProps> = ({ tool }) => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
  const [content, setContent] = useState(tool.content);
  const [updateNote, setUpdateNot] = useState(tool.updateNote);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    ("use server");
    await ToolService.editTool({ ...data, content: content, updateNote: updateNote });
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
              <Input label="ID" name="id" type="text" data={tool.id} />
              <Input label="Tên tool" name="nameTool" type="text" data={tool.nameTool} />
              <div className="flex justify-between">
                <Input style="w-[47%]" label="Giá tháng" name="priceMonth" type="number" data={tool.priceMonth} />
                <Input style="w-[47%]" label="Giá năm" name="priceYear" type="number" data={tool.priceYear} />
              </div>
              <div className="flex justify-between">
                <Input style="w-[47%]" label="Server" name="server" type="number" data={tool.server} />
                <Input style="w-[47%]" label="Version" name="version" type="text" data={tool.version} />
              </div>
              <Input label="Infor" name="infor" type="text" data={tool.infor} />

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

              <Input label="Link Hình ảnh" name="image" type="text" data={tool.image} />
              <Input label="Link Video" name="video" type="text" data={tool.video} />
              <div className="form-control mt-6">
                <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
                  <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
                  {`${isLoading ? "" : "Sửa Tool"}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }
  const id = params.slug as string;
  const tool = JSON.parse(JSON.stringify(await ToolService.getToolById(id)));
  return {
    props: {
      tool,
    },
    revalidate: 60,
  };
};
