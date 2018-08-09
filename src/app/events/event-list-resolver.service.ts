import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { map } from "rxjs/operators/map";

import { EventService } from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  resolve() {
    return this.eventService.events
      .pipe(map(events => events));
  }
}
