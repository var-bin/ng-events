import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";
import { EventService } from "./shared/event.service";

import { CreateEventComponent } from "./create-event/create-event.component";

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<any> {
  constructor(private router: Router, private eventService: EventService) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const isEventExisted = !!this.eventService.getEvent(+route.params["id"]);

    if (!isEventExisted) {
      this.router.navigate(["/404"]);
    }

    return isEventExisted;
  }

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) {
      return false;
    }

    return true;
  }
}
