import axios from "axios";
import config from ".";
const LogService = {
  getAllLog: async (token: string) => {
    try {
      ("use server");
      const response = await axios(config("get", "/log/all", token));
      if (response.data.success) {
        return response.data.message.log;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default LogService;
