export interface AuthForm {
  name?: string | FormDataEntryValue;
  email: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
  passwordConfirm?: string | FormDataEntryValue;
}

declare global {
  interface Window {
    modal_buy_tool: HTMLDialogElement;
    modal_video: HTMLDialogElement;
  }

  interface Tool {
    id: number;
    nameTool: string;
    priceMonth: number;
    priceYear: number;
    server: number;
    version: string;
    click: number;
    sold: number;
    infor: string;
    content: string;
    updateNote: string;
    image: string;
    video: string;
  }

  interface User {
    id: number;
    email: string;
    money: number;
    name: string;
    role: string;
    vip: string;
    status: string;
  }

  interface Log {
    id: number;
    userId: number;
    content: string;
    createdAt: DateTime;
  }

  interface Menu {
    path: string;
    icon: JSX.Element;
    name: string;
  }
}
