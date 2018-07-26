import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: `
    <events-nav></events-nav>
    <events-list></events-list>
  `
})
export class EventsAppComponent {}
