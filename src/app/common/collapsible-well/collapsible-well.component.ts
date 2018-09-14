import { Component } from "@angular/core";

@Component({
  selector: "collapsible-well",
  templateUrl: "./collapsible-well.component.html"
})

export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent(): void {
    this.visible = !this.visible;
  }
}