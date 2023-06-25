import axios from "axios";
import config from ".";
const ToolAction = {
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
      if (response.data.success) 
        return response.data.message.tool;
      return null
    } catch (error) {
      console.log(error);
    }
  },
};
export default ToolAction;
