import { Component, Input, OnChanges } from "@angular/core";

import { ISession } from "../../shared/session.model";

@Component({
  selector: "sessions-list",
  templateUrl: "./sessions-list.component.html"
})

export class SessionsListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;

  visibleSession: ISession[];

  ngOnChanges() {
    if (this.filterBy === "all") {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions
        .filter(session => session.level.toLocaleLowerCase() === this.filterBy);
    }
  }
}
