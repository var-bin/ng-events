import {
  Directive,
  OnInit,
  ElementRef,
  Input
} from "@angular/core";

import { fromEvent } from "rxjs/observable/fromEvent";
import { Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

declare const $: any;

@Directive({
  selector: "[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  private clicksOrTriggersSubscription$: Subscription;

  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    const clicks$ = fromEvent<Event>(this.el, "click");

   /*  clicks$
      .subscribe((value) => {
        console.log('click$: ', value);

        $(`#${this.modalId}`).modal();
      }); */

    this.el.addEventListener("click", (e) => {
      $(`#${this.modalId}`).modal();
    });
  }
}
