const format = {
  money: (value: number) => {
    let newMoney = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
    return newMoney.replace(" ₫", "");
  },
};

export default format;
