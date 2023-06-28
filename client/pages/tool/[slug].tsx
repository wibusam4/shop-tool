import ToolService from "@/src/services/Tool.service";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import format from "@/src/libs/format";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { GetStaticPaths, GetStaticProps } from "next";
import { useContext, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Video from "@/src/components/modals/Video";
import BuyTool from "@/src/components/modals/BuyTool";

interface MainProps {
  tool: Tool;
}
const ToolIem: React.FC<MainProps> = ({ tool }) => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(1);
  const handleClick = (type: number) => {
    setType(type);
    window.modal_buy_tool.showModal();
  };
  const handelShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full">
        <div className="w-full max-w-[1280px] m-auto">
          <div className="tiltle p-4 md:p-10 max-w-[1024px] m-auto">
            <h1 className="text-center text-2xl uppercase font-bold relative">Thông tin tool</h1>
            <div className="w-36 h-1 bg-success m-auto"></div>
            {tool ? (
              <div className="card-item mt-4 max-w-[1280px]">
                <div className="flex flex-wrap sm:flex-nowrap justify-center">
                  <div className="img-tool w-full max-w-[200px] h-[200px] p-1 border border-neutral-800 rounded">
                    <img
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                      className="rounded object-fill aspect-square"
                    />
                  </div>
                  <div className="tool py-10 sm:py-0 px-0 sm:px-10 flex flex-col gap-y-2 font-semibold w-full">
                    <h1 className="text-xl uppercase font-bold flex flex-col sm:flex-row gap-x-3">
                      {tool.nameTool}{" "}
                      <div className="badge badge-primary badge-xs mt-1 py-[6px]">verison: {tool.version}</div>
                    </h1>
                    <p>
                      Người bán: <span className="text-error">ADMIN</span>
                    </p>
                    <p>Thông tin: {tool.infor}</p>
                    <p>Server: {tool.server}</p>
                    <BuyTool tool={tool} type={type} />
                    <div className="flex flex-wrap gap-4">
                      <button className="btn btn-success flex-col" onClick={() => handleClick(1)}>
                        Mua Tháng
                        <span className="flex items-end">
                          {format.money(tool.priceMonth)}
                          <StarIcon className="w-4 h-4" />
                        </span>
                      </button>
                      <button className="btn btn-warning flex-col" onClick={() => handleClick(2)}>
                        Mua Năm
                        <span className="flex items-end">
                          {format.money(tool.priceYear)}
                          <StarIcon className="w-4 h-4" />
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          handelShowModal();
                        }}
                        className="btn btn-info flex-col"
                      >
                        Xem Demo
                      </button>
                      {showModal ? <Video handle={handelShowModal} tool={tool}></Video> : null}
                    </div>
                  </div>
                </div>
                <div className="content-tool mt-4">
                  <h1 className="font-bold text-lg">-Mô tả chi tiết tool:</h1>
                  <ReactQuill value={tool.content} readOnly={true} theme={"bubble"} />
                </div>
                <div className="content-tool mt-4">
                  <h1 className="font-bold text-lg">-Nhật kí cập nhật:</h1>
                  <ReactQuill value={tool.updateNote} readOnly={true} theme={"bubble"} />
                </div>
              </div>
            ) : (
              <div className="h-full flex justify-center items-center">
                <h1 className="text-2xl mb-20 text-center">Không tìm thấy tool</h1>
              </div>
            )}
          </div>
          <div className="content"></div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default ToolIem;

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
