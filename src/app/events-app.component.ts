import { Component } from "@angular/core";

@Component({
  selector: "events-app",
  template: `
    <events-nav></events-nav>
    <router-outlet></router-outlet>
  `,
})
export class EventsAppComponent {}
