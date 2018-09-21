import { InjectionToken } from "@angular/core";

export const TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');

interface IToastrMethodsArgs {
  message: string;
  title?: string;
}

export interface IToastr {
  success(IToastrMethodsArgs): void;
  info(IToastrMethodsArgs): void;
  warning(IToastrMethodsArgs): void;
  error(IToastrMethodsArgs): void;
}
