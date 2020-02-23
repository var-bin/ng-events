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
  ],
})

export class NavComponent {
  foundItems: ISession[];
  isHidden = true;
  searchData: string;

  constructor(
    private userAuthService: UserAuthService,
    private eventService: EventService,
  ) {}

  isAuthenticated(): boolean {
    return this.userAuthService.isAuthenticated();
  }

  onSubmitSearch(): void {
    if (!this.searchData) {
      return;
    }

    this.eventService.searchSessions(this.searchData)
      .subscribe((sessions: ISession[]) => {
        if (sessions.length) {
          this.foundItems = sessions;
          this.isHidden = false;
          this.searchData = "";
        }
      });
  }

  get userName(): string {
    return this.userAuthService.firstName;
  }
}
