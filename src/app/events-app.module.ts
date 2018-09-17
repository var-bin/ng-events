import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  EventsAppComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionsListComponent,
  DurationPipe
} from "./events/index";

import { Error404Component } from "./errors/error-404.component";
import { NavComponent } from "./nav/nav.component";
import { CollapsibleWellComponent } from "./common/collapsible-well/collapsible-well.component";

import { ToastrService } from "./common/toastr.service";
import { UserAuthService } from "./user/user-auth.service";

import { appRoutes } from "../routes";


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    UserAuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
