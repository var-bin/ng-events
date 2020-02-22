import { Component } from "@angular/core";

@Component({
  selector: "events-collapsible-well",
  templateUrl: "./collapsible-well.component.html"
})

export class CollapsibleWellComponent {
  visible = true;

  toggleContent(): void {
    this.visible = !this.visible;
  }
}
