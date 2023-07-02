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

  convertTime: (timeCreated: number | string | Date): string => {
    let periods: { [key: string]: number } = {
      ngày: 24 * 60 * 60 * 1000,
      giờ: 60 * 60 * 1000,
      phút: 60 * 1000,
    };

    let diff: number = Date.now() - +new Date(`${timeCreated}`);

    for (const key in periods) {
      if (diff >= periods[key]) {
        let result: number = Math.floor(diff / periods[key]);
        return `${result} ${result === 1 ? key : key} trước`;
      }
    }

    return "1 phút trước";
  },
};

export default format;
