import {
  Directive,
  OnInit,
  ElementRef,
  Input
} from "@angular/core";

declare const $: any;

@Directive({
  selector: "[appModalTrigger]",
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  @Input("appModalTrigger") modalId: string;

  constructor(ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e) => {
      $(`#${this.modalId}`).modal();
    });
  }
}
