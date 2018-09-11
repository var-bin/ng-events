import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { EventService } from "../shared/event.service";

import { ISession } from "../shared/session.model";
import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: "./event-details.component.html",
  styles: [`
    .component { padding: 0 20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.event = this.eventService.getEvent(+params["id"]);
      this.addMode = false;
    });
  }

  toggleCreateForm(): void {
    this.addMode = !this.addMode;
  }

  onSaveNewSession(session: ISession): void {
    const NEXT_ID = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = NEXT_ID + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.toggleCreateForm();
  }

  onCancelNewSession() {
    this.toggleCreateForm();
  }
}
