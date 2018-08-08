import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";

import { CreateEventComponent } from "./create-event/create-event.component";

import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<any> {
  constructor(
    private router: Router,
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const isEventExisted = !!this.eventService.getEvent(+route.params["id"]);

    if (!isEventExisted) {
      this.router.navigate(["/404"]);
    }

    return isEventExisted;
  }

  canDeactivate(component: CreateEventComponent) {
    if (component.isDirty) {
      this.toastrService.warning("You have not saved this event!");

      return false;
    }

    return true;
  }
}
