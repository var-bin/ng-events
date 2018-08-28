import { Component, Input } from "@angular/core";

import { IEvent } from "./shared/event.model";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styles: [`
    .green { color: #b2ff59 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 248px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  get startTimeClass() {
    const isEarlyStart = this.event && this.event.time === "8:00 am";

    return {
      green: isEarlyStart,
      bold: isEarlyStart
    };
  }

  get startTimeStyles() {
    if (this.event && this.event.time === "8:00 am") {
      return {
        "color": "#b2ff59",
        "font-weight": "bold"
      };
    }

    return null;
  }
}
