import axios from "axios";
import config from ".";
import { getCookie } from "cookies-next";
import { toast } from "react-hot-toast";
import validate from "../libs/validate";
import Swal from "sweetalert2";
import Router from "next/router";
const ToolService = {
  getAllTool: async () => {
    try {
      const response = await axios(config("get", "/tool/all"));
      if (response.data.success) {
        return response.data.message.tool;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getToolById: async (id: string) => {
    try {
      const response = await axios(config("get", `/tool/${id}`));
      if (response.data.success) return response.data.message.tool;
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  addTool: async (data: Record<string, unknown>) => {
    try {
      const token = getCookie("token") as string;
      if (validate.hasEmptyValues(data)) {
        return toast.error("Thiếu thông tin");
      }
      const response = await axios(config("post", `/tool/add`, token, data));
      if (response.data.success) return toast.success("Thêm tool thành công");
      return toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },

  editTool: async (data: Record<string, unknown>) => {
    try {
      const token = getCookie("token") as string;
      if (validate.hasEmptyValues(data)) {
        return toast.error("Thiếu thông tin");
      }
      const response = await axios(config("put", `/tool/edit`, token, data));
      if (response.data.success) return toast.success("Sửa tool thành công");
      return toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },

  delteTool: async (id: number) => {
    try {
      Swal.fire({
        icon: "question",
        title: `Bạn chắc chắn xóa tool ID: ${id}?`,
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const token = getCookie("token") as string;
          const response = await axios(config("delete", `/tool/delete`, token, { id }));
          if (!response.data.success) return toast.error(response.data.error);
          Swal.fire({
            icon: "success",
            title: "Xóa thành công",
          }).then(() => {
            Router.push("/admin/tool");
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default ToolService;
