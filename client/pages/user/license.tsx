import LayoutMain from "@/src/components/layouts/LayoutMain";
import CustomPagination from "@/src/components/table/Pagination";
import Sidebar from "@/src/components/User/Sidebar";
import table from "@/src/libs/table";
import UserService from "@/src/services/User.service";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

interface MainProps {
  data: [];
}

const Page = ({ data }: MainProps) => {
  const PAGE_SIZE = 7;
  const [paginationModel, setPaginationModel] = useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState({});
  const handleEdit = (values: {}) => {
    setValue(values);
    setShowModal(!showModal);
  };
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full flex">
        <div className="flex flex-wrap w-full mx-auto">
          <div className="sidebar p-4 w-full md:w-[30%] md:border-x-2">
            <Sidebar />
          </div>
          <div className="sidebar p-4 flex-auto overflow-x-auto md:max-w-[70%]">
            <div className="w-full md:p-10">
              <div
                className={`${
                  showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                } flex items-center justify-center fixed inset-0 w-full h-full z-20 bg-neutral-900 bg-opacity-25 transition-opacity duration-200 overflow-y-auto`}
              >
                <div
                  className={`${
                    showModal ? "scale-100" : "scale-0"
                  } relative w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto bg-base-100 transition-transform duration-200 rounded shadow-md`}
                >
                  <div className="flex justify-between p-3 border-b border-solid">
                    <h1>Sửa Key</h1>
                    <button className="border border-neutral-800 rounded-full" onClick={() => setShowModal(false)}>
                      <XCircleIcon className="w-6 h-6 text-error " />
                    </button>
                  </div>
                </div>
              </div>
              <h1 className="uppercase border-l-4 border-success p-2 font-bold text-xl mb-4">Lịch sử mua tool</h1>
              <DataGrid
                rows={data}
                columns={table.columnClientTransTool(handleEdit)}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[PAGE_SIZE]}
                slots={{
                  pagination: CustomPagination,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;

export const getServerSideProps = async ({ req }: any) => {
  const data = await UserService.getMyTool(req.cookies.token);
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
