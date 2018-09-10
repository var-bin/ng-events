import { Component } from "@angular/core";

import { UserAuthService } from "../user/user-auth.service";
import { EventService } from "../events/shared/event.service";
import { ISession } from "../events/shared/session.model";

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
  searchData: string;
  foundItems: ISession[];

  constructor(
    private userAuthService: UserAuthService,
    private eventService: EventService
  ) {}

  isAuthenticated(): boolean {
    return this.userAuthService.isAuthenticated();
  }

  get userName(): string {
    return this.userAuthService.firstName;
  }

  onSubmitSearch(searchData) {
    console.log(searchData);

    this.eventService.searchSessions(searchData)
      .subscribe((sessions) => {
        this.foundItems = sessions;

        console.log("onSubmitSearch: ", this.foundItems);
      });
  }
}
