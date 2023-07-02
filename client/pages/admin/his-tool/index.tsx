import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import { DataGrid } from "@mui/x-data-grid";
import table from "@/src/libs/table";
import { useState } from "react";
import CustomPagination from "@/src/components/table/Pagination";
import AdminService from "@/src/services/Admin.service";
interface MainProps {
  data: [];
}

const Page: React.FC<MainProps> = ({ data }) => {
  const PAGE_SIZE = 7;
  const [paginationModel, setPaginationModel] = useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  return (
    <LayoutAdmin>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>Giao dịch tool</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full">
            <DataGrid
              disableColumnMenu
              rows={data}
              columns={table.columnTransTool()}
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
    </LayoutAdmin>
  );
};

export default Page;

export const getServerSideProps = async ({ req }: any) => {
  const data = await AdminService.getAllHisBuyTool(req.cookies.token);
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
