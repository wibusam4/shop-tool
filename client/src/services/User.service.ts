import axios from "axios";
import config from ".";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import format from "../libs/format";
const UserService = {
  getInfor: async () => {
    try {
      const token = getCookie("token") as string;
      const response = await axios(config("get", "/user/get", token));
      if (response.data.success) {
        setCookie("role", response.data.message.user.role);
        return response.data.message.user;
      }
      deleteCookie("token");
    } catch (error) {
      console.log(error);
    }
  },

  getAllUser: async (token: string) => {
    try {
      const response = await axios(config("get", "/user/getall", token));
      if (response.data.success) {
        return response.data.message.users;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getById: async (token: string, id: string) => {
    try {
      const response = await axios(config("post", "/user/get", token, { id }));
      if (response.data.success) {
        return response.data.message.user;
      }
    } catch (error) {
      console.log(error);
    }
  },

  editById: async (data: object) => {
    try {
      const token = getCookie("token") as string;
      const response = await axios(config("put", "/user/edit", token, data));
      if (response.data.success) return toast.success(response.data.message);
      toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },

  editMoney: async (data: object) => {
    try {
      const token = getCookie("token") as string;
      const response = await axios(config("post", "/user/changemoney", token, data));
      if (response.data.success) return toast.success(response.data.message);
      toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },

  buyTool: async (nameTool: string, price: number, toolId: number, type: string, server: number) => {
    const swalDaisyui = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mr-2",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });
    const name = `<p class="font-semibold">Tool: <span class="text-info">${nameTool}</span></p>`;
    const money = `<p class="font-semibold mt-2">Giá: <span class="text-error">${format.money(price)}</span></p>`;
    swalDaisyui
      .fire({
        title: `Xác nhận mua tool`,
        icon: "question",
        html: name + money,
        showCancelButton: true,
        confirmButtonText: "Xác Nhận",
        cancelButtonText: "Hủy Bỏ",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const token = getCookie("token") as string;
          const data = { toolId, type, server };
          const response = await axios(config("post", "/user/buytool", token, data));
          if (response.data.error) return toast.error(response.data.message);
          toast.success("Mua thành công");
        }
      });
  },

  getBalance: async (token: string) => {
    try {
      const response = await axios(config("get", "/user/balance", token));
      if (response.data.success) {
        return response.data.message.transaction;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getMyTool: async (token: string) => {
    try {
      const response = await axios(config("get", "/user/tool", token));
      if (response.data.success) {
        return response.data.message.transaction;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default UserService;
