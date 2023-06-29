import moment from "moment";
const format = {
  money: (value: number) => {
    let newMoney = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
    return newMoney.replace(" ₫", "");
  },

  dateTime: (value: number | string | Date) => {
    return moment(value).format("DD-MM-YYYY hh:mm:ss");
  },
};

export default format;
