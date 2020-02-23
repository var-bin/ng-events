import {
  Component,
  Input,
  OnChanges,
} from "@angular/core";

import { ISession } from "../../shared/session.model";

@Component({
  selector: "events-sessions-list",
  templateUrl: "./sessions-list.component.html",
})

export class SessionsListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSession: ISession[];

  ngOnChanges() {
    if (this.sessions.length) {
      this.filterSessions();
      this.sortSessions();
    }
  }

  private sortSessions(): void {
    this.sortBy === "name" ? this.visibleSession.sort(this.sortByNameAsc)
      : this.visibleSession.sort(this.sortByVotesDesc);
  }

  private filterSessions(): void {
    if (this.filterBy === "all") {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions
        .filter(session => session.level.toLocaleLowerCase() === this.filterBy);
    }
  }

  private sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) { return 1; }
    if (s1.name < s2.name) { return -1; }
  }

  private sortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }
}
