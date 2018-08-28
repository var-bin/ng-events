import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { EventService } from "../shared/event.service";
import { IEvent } from "../shared/event.model";

@Component({
  templateUrl: "./create-event.component.html",
  styles: [`
    em { display: none; }

    .error em {
      display: block;
      float: right;
      color: red;
    }

    .error input {
      background-color: antiquewhite;
    }

    .error input::placeholder {
      color: crimson;
    }
  `]
})

export class CreateEventComponent {
  isDirty = false;
  newEvent = {};

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  cancel(): void {
    this.router.navigate(["/events"]);
  }

  saveEvent(formData: IEvent) {
    this.eventService.saveEvent(formData);
    this.router.navigate(["/events"]);
    this.isDirty = false;
  }
}
