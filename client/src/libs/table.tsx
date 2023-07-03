import { GridColDef } from "@mui/x-data-grid";
import format from "./format";
import badge from "./badge";
import Link from "next/link";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import FolderArrowDownIcon from "@heroicons/react/24/solid/FolderArrowDownIcon";
import ToolService from "../services/Tool.service";

const table = {
  columnLog: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "userId", headerName: "UserID", width: 150 },
      { field: "content", headerName: "Nội dung", width: 350 },
      { field: "createdAt", headerName: "Ngày Tạo", valueFormatter: ({ value }) => format.dateTime(value), width: 350 },
    ];
    return columns;
  },

  columnTransTool: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "tool",
        valueGetter: (params) => {
          return params.value.nameTool;
        },
        headerName: "Tên tool",
        width: 200,
      },
      { field: "key", headerName: "Key", width: 350 },
      { field: "server", headerName: "Server", width: 100 },
      { field: "type", headerName: "Type", width: 100 },
      { field: "createdAt", headerName: "Ngày Mua", valueFormatter: ({ value }) => format.dateTime(value), width: 250 },
      {
        field: "updatedAt",
        headerName: "Ngày Sửa Key",
        valueFormatter: ({ value }) => format.dateTime(value),
        width: 250,
      },
    ];
    return columns;
  },

  columnClientTransTool: (handleEdit: Function) => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "tool",
        valueGetter: (params) => {
          return params.value.nameTool;
        },
        headerName: "Tên tool",
        width: 170,
      },
      { field: "key", headerName: "Key", width: 250 },
      { field: "server", headerName: "Server", width: 90 },
      { field: "type", headerName: "Type", width: 90 },
      {
        field: "createdAt",
        headerName: "Ngày Mua",
        valueFormatter: ({ value }) => format.convertTime(value),
        width: 150,
      },
      {
        field: "updatedAt",
        headerName: "Ngày Sửa Key",
        valueFormatter: ({ value }) => format.convertTime(value),
        width: 150,
      },
      {
        field: "action",
        headerName: "Thao tác",
        width: 150,

        renderCell: (params) => (
          <>
            <button
              onClick={() => {
                handleEdit(params.row);
              }}
              className="btn btn-success btn-sm text-base-200 hover:bg-base-200 hover:text-success duration-300"
            >
              <PencilIcon className="w-5 h-5 " />
            </button>
            <button className="btn btn-error btn-sm ml-2 text-base-200 hover:bg-base-200 hover:text-error duration-300">
              <FolderArrowDownIcon className="w-5 h-5" />
            </button>
          </>
        ),
      },
    ];
    return columns;
  },

  columnTransBalance: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "userId", headerName: "ID Thao Tác", width: 130 },
      {
        field: "oldMoney",
        headerName: "Số dư cũ",
        width: 170,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-primary font-semibold";
        },
      },
      {
        field: "money",
        headerName: "Số tiền",
        width: 170,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: ({ value }) => {
          return `${value > 0 ? "text-success" : "text-error"}  font-semibold`;
        },
      },
      {
        field: "newMoney",
        headerName: "Số dư mới",
        width: 170,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-secondary font-semibold";
        },
      },
      { field: "content", headerName: "Nội dung", width: 350 },
      { field: "createdAt", headerName: "Ngày Tạo", valueFormatter: ({ value }) => format.dateTime(value), width: 250 },
    ];
    return columns;
  },

  columnClientTransBalance: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 70 },

      {
        field: "oldMoney",
        headerName: "Số dư cũ",
        width: 120,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-primary font-semibold";
        },
      },
      {
        field: "money",
        headerName: "Số tiền",
        width: 120,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: ({ value }) => {
          return `${value > 0 ? "text-success" : "text-error"}  font-semibold`;
        },
      },
      {
        field: "newMoney",
        headerName: "Số dư mới",
        width: 120,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-secondary font-semibold";
        },
      },
      { field: "content", headerName: "Nội dung", width: 220 },
      { field: "createdAt", headerName: "Ngày Tạo", valueFormatter: ({ value }) => format.dateTime(value), width: 130 },
    ];
    return columns;
  },

  columnUser: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "name", headerName: "Tên", width: 150 },
      { field: "email", headerName: "Email", width: 250 },
      {
        field: "money",
        headerName: "Số tiền",
        width: 150,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-error font-semibold";
        },
      },
      {
        field: "role",
        headerName: "Chức vụ",
        width: 150,
        renderCell: (params) => badge.role(params.value),
      },
      { field: "vip", headerName: "Vip", width: 100 },
      { field: "status", headerName: "Trạng thái", width: 150, renderCell: (params) => badge.status(params.value) },
      {
        field: "action",
        headerName: "Thao tác",
        renderCell: (params) => (
          <Link
            href={`/admin/user/${params.id}`}
            className="border border-info p-2 rounded hover:bg-info hover:text-base-100 text-info duration-300"
          >
            <PencilIcon className="w-5 h-5" />
          </Link>
        ),
      },
    ];
    return columns;
  },

  columnTool: () => {
    const columns: GridColDef[] = [
      { field: "id", headerName: "ID", width: 90 },
      { field: "nameTool", headerName: "Tên tool", width: 250 },
      {
        field: "priceMonth",
        headerName: "Giá tháng",
        width: 150,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-error font-semibold";
        },
      },
      {
        field: "priceYear",
        headerName: "Giá năm",
        width: 150,
        valueFormatter: ({ value }) => format.money(value),
        cellClassName: () => {
          return "text-error font-semibold";
        },
      },
      {
        field: "version",
        headerName: "Version",
        width: 150,
        renderCell: (params) => badge.role(params.value),
      },
      { field: "click", headerName: "Lượt click", width: 150 },
      { field: "sold", headerName: "Lượt Mua", width: 150, renderCell: (params) => badge.status(params.value) },
      {
        field: "action",
        headerName: "Thao tác",
        renderCell: (params) => (
          <>
            <Link
              href={`/admin/tool/${params.id}`}
              className="border border-info p-2 rounded hover:bg-info hover:text-base-100 text-info duration-300"
            >
              <PencilIcon className="w-5 h-5" />
            </Link>
            <button
              className="ml-2 border border-error p-2 rounded hover:bg-error hover:text-base-100 text-error duration-3"
              onClick={() => {
                ToolService.delteTool(Number(params.id));
              }}
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </>
        ),
      },
    ];
    return columns;
  },
};
export default table;
