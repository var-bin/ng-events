import { Component } from "@angular/core";

import { UserAuthService } from "../user/user-auth.service";

@Component({
  selector: "events-nav",
  templateUrl: "./nav.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      .nav__link.is-active {
        color: #fb8c00 !important;
      }
    `
  ]
})

export class NavComponent {
  constructor(private userAuthService: UserAuthService) {}

  isAuthenticated(): boolean {
    return this.userAuthService.isAuthenticated();
  }

  get userName(): string {
    return this.userAuthService.firstName;
  }
}
