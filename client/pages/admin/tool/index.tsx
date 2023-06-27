import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import CardHeader from "@/src/components/cards/CardHeader";
import ToolService from "@/src/services/Tool.service";
import ModalTool from "@/src/components/modals/Tool";
import Link from "next/link";

interface MainProps {
  data: [];
}

const index: React.FC<MainProps> = ({ data }) => {
  const handleDetele = async (id: number) => {
    ToolService.delteTool(id);
  };
  return (
    <LayoutAdmin>
      <CardHeader>
        <ModalTool />
        <div className="indicator mr-6">
          <Link href={"/admin/tool/add"} className="btn btn-success btn-sm">
            THÊM TOOL
          </Link>
        </div>
        <div className="join">
          <div>
            <div>
              <input className="input input-sm input-bordered join-item" placeholder="Email..." />
            </div>
          </div>

          <div className="indicator">
            <button className="btn btn-warning btn-sm join-item">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardHeader>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>Current Leads</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên Tool</th>
                  <th>Giá Tháng</th>
                  <th>Giá Năm</th>
                  <th>Version</th>
                  <th>Lượt click</th>
                  <th>Lượt mua</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((tool: Tool) => {
                    return (
                      <tr key={tool.id}>
                        <td>{tool.id}</td>
                        <td>{tool.nameTool}</td>
                        <td>{tool.priceMonth}</td>
                        <td>{tool.priceYear}</td>
                        <td>{tool.version}</td>
                        <td>{tool.click}</td>
                        <td>{tool.sold}</td>
                        <td className="flex">
                          <Link href={`/admin/tool/${tool.id}`} className="btn btn-square btn-ghost text-info">
                            <PencilIcon className="w-5" />
                          </Link>
                          <button className="btn btn-square btn-ghost text-error" onClick={() => handleDetele(tool.id)}>
                            <TrashIcon className="w-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default index;

export const getServerSideProps = async () => {
  const data = await ToolService.getAllTool();
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
