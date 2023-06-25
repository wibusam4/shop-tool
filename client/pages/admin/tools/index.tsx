import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import CardHeader from "@/src/components/cards/CardHeader";
import ToolAction from "@/src/actions/Tool.acction";
import ModalTool from "@/src/components/modals/Tool";

interface MainProps {
  data: [];
}

const index: React.FC<MainProps> = ({ data }) => {
  return (
    <LayoutAdmin>
      <CardHeader>
        <ModalTool />
        <div className="indicator mr-6">
          <button
            className="btn btn-success btn-sm"
            onClick={() => window.modal_tool.showModal()}
          >
            THÊM TOOL
          </button>
        </div>
        <div className="join">
          <div>
            <div>
              <input
                className="input input-sm input-bordered join-item"
                placeholder="Email..."
              />
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
                  <th>Name</th>
                  <th>Email Id</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Assigned To</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {data.length > 0 &&
                    data.map((tool: any) => {
                      return (
                        <div key={tool.id}>
                          <td>WibuSama</td>
                          <td>wibu@gmail.com</td>
                          <td>08 Jun 23</td>
                          <td>ACTIVE</td>
                          <td>lawson</td>
                          <td className="flex">
                            <button className="btn btn-square btn-ghost text-info">
                              <PencilIcon className="w-5" />
                            </button>
                            <button className="btn btn-square btn-ghost text-error">
                              <TrashIcon className="w-5" />
                            </button>
                          </td>
                        </div>
                      );
                    })}
                </tr>
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
  const data = await ToolAction.getAllTool();
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
