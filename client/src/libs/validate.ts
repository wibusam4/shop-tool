const validate = {
  email: (email: string) => {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);
    return result;
  },

  string: (values: string, lenght: number, maxLenght: number) => {
    const expression: RegExp = new RegExp(`^[a-zA-Z0-9]{${lenght},${maxLenght}}$`);
    const result: boolean = expression.test(values);
    return result;
  },

  hasEmptyValues: (data: Record<string, unknown>) => {
    for (let key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key] === "") {
        return true;
      }
    }
    return false;
  },
};

export default validate;
