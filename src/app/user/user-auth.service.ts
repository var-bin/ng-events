import { Injectable } from "@angular/core";

import { IUser } from "./user.model";

@Injectable()

export class UserAuthService {
  currentUser: IUser;

  loginUser(userName: string, userPassword: string) {
    this.currentUser = {
      id: 1,
      firstName: "John",
      lastName: "Papa",
      userName
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  get userName(): string {
    return this.currentUser.firstName;
  }
}
