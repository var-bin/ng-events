import { Component, Input } from "@angular/core";

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
  @Input() event: any;

  get startTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';

    return {
      green: isEarlyStart,
      bold: isEarlyStart
    };
  }
}
