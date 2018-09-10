import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[select-row]"
})

export class SelectRowDirective {
  el: HTMLElement;

  constructor(private ref: ElementRef) {}
}
