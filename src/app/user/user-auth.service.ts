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
      userName,
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }

  get firstName(): string {
    if (this.isAuthenticated()) {
      return this.currentUser.firstName;
    }
  }

  set firstName(fName: string) {
    this.currentUser.firstName = fName;
  }

  get lastName(): string {
    if (this.isAuthenticated()) {
      return this.currentUser.lastName;
    }
  }

  set lastName(lName: string) {
    this.currentUser.lastName = lName;
  }
}
