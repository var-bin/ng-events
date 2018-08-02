import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";

import { appRoutes } from "../routes";


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
