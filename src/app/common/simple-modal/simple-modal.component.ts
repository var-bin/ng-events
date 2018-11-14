import { Component, Input, ViewChild, ElementRef } from "@angular/core";

declare const $: any;

@Component({
  selector: "simple-modal",
  templateUrl: "./simple-modal.component.html"
})

export class SimpleModalComponent {
  @Input() modalTitle: string;
  @Input() modalId: string;
  @ViewChild("modalContainer") container: ElementRef;

  closeModal() {
    console.log($, this.container.nativeElement);
    $(this.container.nativeElement).modal("hide");
  }
}
