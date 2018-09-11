import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[select-row]"
})

export class SelectRowDirective implements OnInit {
  private el: HTMLElement;
  private readonly ENABLED_KEYS = {
    arrowDown: 40,
    arrowUp: 38
  };
  private readonly CSS_CLASS = "is-selected";
  private readonly TR_TAG = "TR";
  private readonly TD_TAG = "TD";

  constructor(private ref: ElementRef) {
    this.el = this.ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e) => {
      this.onHighlightTr(e);
    });

    this.el.addEventListener("keydown", (e) => {
      this.onArrowKeysHighlightTr(e);
    })
  }

  onHighlightTr(event: Event) {
    const CLICKED_TARGET = <Element>event.target;

    if (CLICKED_TARGET.tagName === this.TD_TAG) {
      this.removeHighlight();
      CLICKED_TARGET.parentElement.classList.add(this.CSS_CLASS);

      console.log("Need add css class", CLICKED_TARGET, event);
    }
  }

  onArrowKeysHighlightTr(event: KeyboardEvent) {
    const selected = this.el.querySelector(`.${this.CSS_CLASS}`);
    const doHighlightNextTr = selected && selected.nextElementSibling && selected.nextElementSibling.tagName === this.TR_TAG;
    const doHighlightPrevTr = selected && selected.previousElementSibling && selected.previousElementSibling.tagName === this.TR_TAG;
    const keyCode = event.keyCode;
    const isArrowDownPressed = this.ENABLED_KEYS.arrowDown === keyCode;
    const isArrowUpPressed = this.ENABLED_KEYS.arrowUp === keyCode;

    // there is no selected tr
    if (!selected) {
      return;
    }

    // move down
    if (doHighlightNextTr && isArrowDownPressed) {
      this.removeHighlight();
      selected.nextElementSibling.classList.add(this.CSS_CLASS);
    }

    // move up
    if (doHighlightPrevTr && isArrowUpPressed) {
      this.removeHighlight();
      selected.previousElementSibling.classList.add(this.CSS_CLASS);
    }
  }

  private removeHighlight() {
    const _forEach = Array.prototype.forEach;
    const selectedTrs = this.el.querySelectorAll(`.${this.CSS_CLASS}`);

    console.log("selectedTrs: ", selectedTrs);

    if (selectedTrs.length > 0) {
      _forEach.call(selectedTrs, (tr: HTMLElement) => {
        tr.classList.remove(this.CSS_CLASS);
      });
    }
  }
}
