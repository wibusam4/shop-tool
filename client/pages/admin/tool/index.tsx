import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import CardHeader from "@/src/components/cards/CardHeader";
import ToolService from "@/src/services/Tool.service";
import Link from "next/link";
import { DataGrid } from "@mui/x-data-grid";
import table from "@/src/libs/table";
import { useState } from "react";
import CustomPagination from "@/src/components/table/Pagination";
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
      <CardHeader>
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
        <div className={`text-xl font-semibold`}>Danh sách tool</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full">
            <DataGrid
              rows={data}
              columns={table.columnTool()}
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

export const getServerSideProps = async () => {
  const data = await ToolService.getAllTool();
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
