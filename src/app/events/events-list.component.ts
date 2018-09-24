import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { IToastr, TOASTR_TOKEN } from "../common/toastr.service";

import { IEvent } from "./shared/event.model";

@Component({
  templateUrl: "./events-list.component.html"
})

export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    @Inject(TOASTR_TOKEN) private toastrService: IToastr,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  showEventName(eventName: string) {
    this.toastrService.info(eventName);
  }
}
