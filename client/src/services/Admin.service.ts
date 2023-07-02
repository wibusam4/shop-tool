import axios from "axios";
import config from ".";

const AdminService = {
  getAllTrans: async (token: string) => {
    try {
      ("use server");
      const response = await axios(config("get", "/transaction/balance", token));
      if (response.data.success) {
        return response.data.message.transaction;
      }
    } catch (error) {
      console.log(error);
    }
  },

  getAllHisBuyTool: async (token: string) => {
    try {
      ("use server");
      const response = await axios(config("get", "/transaction/tool", token));
      if (response.data.success) {
        return response.data.message.transaction;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default AdminService;
