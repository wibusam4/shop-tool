import LayoutMain from "@/src/components/layouts/LayoutMain";
import CustomPagination from "@/src/components/table/Pagination";
import Sidebar from "@/src/components/User/Sidebar";
import table from "@/src/libs/table";
import UserService from "@/src/services/User.service";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

interface MainProps {
  data: [];
}
const Page = ({ data }: MainProps) => {
  const PAGE_SIZE = 5;
  const [paginationModel, setPaginationModel] = useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full flex">
        <div className="flex flex-wrap w-full mx-auto">
          <div className="sidebar p-4 w-full md:w-[30%] md:border-x-2">
            <Sidebar />
          </div>
          <div className="sidebar p-4 flex-auto overflow-x-auto md:max-w-[70%]">
            <div className="w-full md:p-10">
              <h1 className="uppercase border-l-4 border-success p-2 font-bold text-xl mb-4">Biến động số dư</h1>
              <div className="h-[390px]">
                <DataGrid
                  rows={data}
                  columns={table.columnClientTransBalance()}
                  paginationModel={paginationModel}
                  onPaginationModelChange={setPaginationModel}
                  pageSizeOptions={[PAGE_SIZE]}
                  //hideFooter
                  slots={{
                    pagination: CustomPagination,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Page;

export const getServerSideProps = async ({ req }: any) => {
  const data = await UserService.getBalance(req.cookies.token);
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
