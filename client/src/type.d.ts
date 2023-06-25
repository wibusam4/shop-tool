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
  }
}
