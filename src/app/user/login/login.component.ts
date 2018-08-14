import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { UserAuthService } from "../user-auth.service";

@Component({
  templateUrl: "./login.component.html"
})

export class LoginComponent {
  userName: string;
  userPassword: string;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  onLogin(formValues): void {
    this.userAuthService.loginUser(
      formValues.userName,
      formValues.password
    );

    this.router.navigate(["events"]);
  }

  onCancel(): void {
    this.router.navigate(["events"]);
  }
}
