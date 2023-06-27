export interface AuthForm {
  name?: string | FormDataEntryValue;
  email: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
  passwordConfirm?: string | FormDataEntryValue;
}

export interface User {
  id: number;
  email: string;
  money: number;
  name: string;
  role: string;
  vip: string;
}

declare global {
  interface Window {
    modal_tool: HTMLDialogElement;
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
}
