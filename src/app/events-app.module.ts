import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

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
  SessionListTableComponent,
  DurationPipe,
} from "./events/index";

import { Error404Component } from "./errors/error-404.component";
import { NavComponent } from "./nav/nav.component";
import { CollapsibleWellComponent } from "./common/collapsible-well/collapsible-well.component";

import { UserAuthService } from "./user/user-auth.service";

import { appRoutes } from "../routes";

import {
  TOASTR_TOKEN,
  IToastr,
  SimpleModalComponent,
  ModalTriggerDirective,
  SelectRowDirective,
} from "./common/index";

declare let toastr: IToastr;

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
    ModalTriggerDirective,
    SessionListTableComponent,
    SelectRowDirective,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr,
    },
    {
      provide: EventRouteActivator,
      useClass: EventRouteActivator,
    },
    EventListResolver,
    UserAuthService,
  ],
  bootstrap: [EventsAppComponent],
})
export class EventsAppModule { }
