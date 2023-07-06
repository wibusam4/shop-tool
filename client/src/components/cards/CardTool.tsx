import format from "@/src/libs/format";
import CloudArrowDownIcon from "@heroicons/react/24/solid/CloudArrowDownIcon";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import FireIcon from "@heroicons/react/24/solid/FireIcon";
import Link from "next/link";
import React from "react";

interface MainProps {
  tool: Tool;
}
const CardTool = ({ tool }: MainProps) => {
  return (
    <div
      key={tool.id}
      className="card-tool p-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 hover:scale-105 duration-500 cursor-pointer"
    >
      <div className="border border-neutral-400 shadow-md rounded p-1">
        <div className="border border-neutral-400 rounded">
          <div className="">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded"
            />
          </div>
          <div className="card-body items-center text-center px-6">
            <h2 className="card-title">{tool.nameTool}</h2>
            <p className="font-semibold flex text-accent">
              {format.money(tool.priceMonth)} <FireIcon className="w-5 h-5 text-error " />/ 1 Tháng
            </p>
            <p className="font-semibold min-h-[48px]">{tool.infor}</p>
            <div className="font-semibold flex flex-wrap justify-center items-center gap-x-1">
              <div className="flex items-center gap-[2px]">
                Click: {tool.click}
                <EyeIcon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center gap-[2px]">
                - Download: {tool.sold}
                <CloudArrowDownIcon className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <div className="card-actions w-full justify-center">
              <Link href={`/tool/${tool.id}`} className="btn btn-info h-8 w-full min-h-0">
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTool;
