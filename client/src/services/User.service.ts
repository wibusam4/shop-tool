import axios from "axios";
import config from ".";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
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
};
export default UserService;
