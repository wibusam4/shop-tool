import ToolService from "@/src/services/Tool.service";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import format from "@/src/libs/format";
import StarIcon from "@heroicons/react/24/solid/StarIcon";
import CloudArrowDownIcon from "@heroicons/react/24/solid/CloudArrowDownIcon";
import EyeIcon from "@heroicons/react/24/solid/EyeIcon";
import Link from "next/link";
interface MainProps {
  data: [];
}
const Home: React.FC<MainProps> = ({ data }) => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md">
        <div className="">
          <div className="tiltle p-4 md:p-10">
            <h1 className="text-center text-2xl uppercase font-bold relative">Tool Server Teamobile</h1>
            <div className="w-36 h-1 bg-success m-auto"></div>
            <div className="card-item flex flex-wrap mt-2 max-w-[1280px]">
              {data.length > 0 &&
                data.map((tool: Tool) => {
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
                          <div className="card-body items-center text-center">
                            <h2 className="card-title">{tool.nameTool}</h2>
                            <p className="text-error font-semibold flex">
                              {format.money(tool.priceMonth)} <StarIcon className="w-5 h-5 text-warning" />/ 1 Tháng
                            </p>

                            <p className="font-semibold">{tool.infor}</p>
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
                })}
            </div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await ToolService.getAllTool();
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
