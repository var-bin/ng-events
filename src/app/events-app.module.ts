import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
