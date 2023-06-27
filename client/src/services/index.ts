const API = process.env.NEXT_PUBLIC_SERVER_URL;
const config = (method: string, url: string, token?: string, data?: object) => {
  return {
    method: method,
    url: `${API}${url}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
    data: data,
  };
};
export default config;
