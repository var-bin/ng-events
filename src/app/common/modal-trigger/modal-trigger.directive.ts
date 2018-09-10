import { Directive, OnInit, ElementRef, Input } from "@angular/core";

declare const $: any;

@Directive({
  selector: "[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  @Input('modal-trigger') modalId: string;

  constructor(
    ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e) => {
      console.log(this.modalId);

      $(`#${this.modalId}`).modal();
    });
  }
}
