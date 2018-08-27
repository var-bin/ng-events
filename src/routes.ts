import { Routes } from "@angular/router";

import { EventsListComponent } from "./app/events/events-list.component";
import { EventDetailsComponent } from "./app/events/event-details/event-details.component";
import { CreateEventComponent } from "./app/events/create-event/create-event.component";
import { Error404Component } from "./app/errors/error-404.component";

import { EventRouteActivator } from "./app/events/event-route-activator.service";
import { EventListResolver } from "./app/events/event-list-resolver.service";
import { CreateSessionComponent } from "./app/events/event-details/create-session/create-session.component";

const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: [EventRouteActivator]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: {
      events: EventListResolver
    }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  {
    path: "events/session/create",
    component: CreateSessionComponent
  },
  {
    path: "404",
    component: Error404Component
  },
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full"
  },
  {
    path: "user",
    loadChildren: "app/user/user.module#UserModule"
  }
];

export { appRoutes };
