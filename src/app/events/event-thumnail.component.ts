import { Component, Input } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styles: [`
    .thumbnail { min-height: 248px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
}
