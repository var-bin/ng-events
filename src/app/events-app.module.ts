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
  SessionsListComponent
} from "./events/index";

import { Error404Component } from "./errors/error-404.component";
import { NavComponent } from "./nav/nav.component";

import { UserAuthService } from "./user/user-auth.service";

import { appRoutes } from "../routes";

import {
  ToastrService,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common/index";


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    SimpleModalComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionsListComponent,
    ModalTriggerDirective
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
