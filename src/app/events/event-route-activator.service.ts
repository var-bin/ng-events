import { Injectable, Inject } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, CanDeactivate } from "@angular/router";

import { CreateEventComponent } from "./create-event/create-event.component";

import { EventService } from "./shared/event.service";
import { TOASTR_TOKEN, IToastr } from "../common/toastr.service";

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<any> {
  constructor(
    private router: Router,
    private eventService: EventService,
    @Inject(TOASTR_TOKEN) private toastrService: IToastr
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
