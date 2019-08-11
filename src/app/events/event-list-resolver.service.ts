import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

import { map } from "rxjs/operators/map";
import { Observable } from "rxjs/Observable";

import { EventService } from "./shared/event.service";
import { IEvent } from "./shared/event.model";

@Injectable()
export class EventListResolver implements Resolve<Observable<IEvent[]>> {
  constructor(private eventService: EventService) {}
  resolve(): Observable<IEvent[]> {
    return this.eventService.events.pipe(map(events => events));
  }
}
