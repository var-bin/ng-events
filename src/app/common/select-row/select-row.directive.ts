import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[select-row]"
})

export class SelectRowDirective implements OnInit {
  private el: HTMLElement;

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
    const TARGET = "TD";
    const CLICKED_TARGET = <Element>event.target;
    const CSS_CLASS = "is-selected";

    if (CLICKED_TARGET.tagName === TARGET) {
      this.removeHighlight(CSS_CLASS);
      CLICKED_TARGET.parentElement.classList.add(CSS_CLASS);

      console.log("Need add css class", CLICKED_TARGET, event);
    }
  }

  onArrowKeysHighlightTr(event: KeyboardEvent) {
    const CSS_CLASS = "is-selected";
    const selected = this.el.querySelector(`.${CSS_CLASS}`);
    const SIBLING_TARGET = "TR";
    const doHighlightNextTr = selected && selected.nextElementSibling && selected.nextElementSibling.tagName === SIBLING_TARGET;
    const doHighlightPrevTr = selected && selected.previousElementSibling && selected.previousElementSibling.tagName === SIBLING_TARGET;
    const keyCode = event.keyCode;
    const ENABLED_KEYS = {
      arrowDown: 40,
      arrowUp: 38
    };
    const isArrowDownPressed = ENABLED_KEYS.arrowDown === keyCode;
    const isArrowUpPressed = ENABLED_KEYS.arrowUp === keyCode;

    // there is no selected tr
    if (!selected) {
      return;
    }

    // move down
    if (doHighlightNextTr && isArrowDownPressed) {
      this.removeHighlight(CSS_CLASS);
      selected.nextElementSibling.classList.add(CSS_CLASS);
    }

    // move up
    if (doHighlightPrevTr && isArrowUpPressed) {
      this.removeHighlight(CSS_CLASS);
      selected.previousElementSibling.classList.add(CSS_CLASS);
    }
  }

  private removeHighlight(cssClass: string) {
    const _forEach = Array.prototype.forEach;
    const selectedTrs = this.el.querySelectorAll(`.${cssClass}`);

    console.log("selectedTrs: ", selectedTrs);

    if (selectedTrs.length > 0) {
      _forEach.call(selectedTrs, (tr: HTMLElement) => {
        tr.classList.remove(cssClass);
      });
    }
  }
}
