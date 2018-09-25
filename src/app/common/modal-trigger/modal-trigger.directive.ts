import {
  Directive,
  OnInit,
  ElementRef,
  Input
} from "@angular/core";

declare const $: any;

@Directive({
  selector: "[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  @Input('modal-trigger') modalId: string;

  constructor(
    private ref: ElementRef
  ) {
    this.el = this.ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e) => {
      $(`#${this.modalId}`).modal();
    });
  }
}
