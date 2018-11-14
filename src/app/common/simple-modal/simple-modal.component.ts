import { Component, Input, ViewChild, ElementRef } from "@angular/core";

declare const $: any;

@Component({
  selector: "simple-modal",
  templateUrl: "./simple-modal.component.html"
})

export class SimpleModalComponent {
  @Input() modalTitle: string;
  @Input() modalId: string;
  @Input() closeOnBodyClick: boolean;
  @ViewChild("modalContainer") container: ElementRef;

  closeModal() {
    if (Boolean(this.closeOnBodyClick)) {
      $(this.container.nativeElement).modal("hide");
    }
  }
}
