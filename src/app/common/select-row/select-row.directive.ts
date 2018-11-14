import { Directive, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";

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

  @Output() selectedTr = new EventEmitter<Element>();

  ngOnInit() {
    this.el.addEventListener("click", this.onHighlightTr.bind(this));
    this.el.addEventListener("keydown", this.onArrowKeysHighlightTr.bind(this));
  }

  onHighlightTr(event: Event) {
    const CLICKED_TARGET = <Element>event.target;

    if (CLICKED_TARGET.tagName === this.TD_TAG) {
      this.removeHighlight();
      CLICKED_TARGET.parentElement.classList.add(this.CSS_CLASS);
    }
  }

  onArrowKeysHighlightTr(event: KeyboardEvent) {
    const selected = this.el.querySelector(`.${this.CSS_CLASS}`);
    const doHighlightNextTr = selected && selected.nextElementSibling && selected.nextElementSibling.tagName === this.TR_TAG;
    const doHighlightPrevTr = selected && selected.previousElementSibling && selected.previousElementSibling.tagName === this.TR_TAG;
    const keyCode = event.keyCode;
    const isArrowDownPressed = this.ENABLED_KEYS.arrowDown === keyCode;
    const isArrowUpPressed = this.ENABLED_KEYS.arrowUp === keyCode;

    // there is not selected tr
    if (!selected) {
      return;
    }

    // disable to scroll a page
    event.preventDefault();

    // move down
    if (doHighlightNextTr && isArrowDownPressed) {
      this.removeHighlight();
      selected.nextElementSibling.classList.add(this.CSS_CLASS);
      this.selectedTr.emit(selected.nextElementSibling);
    }

    // move up
    if (doHighlightPrevTr && isArrowUpPressed) {
      this.removeHighlight();
      selected.previousElementSibling.classList.add(this.CSS_CLASS);
      this.selectedTr.emit(selected.previousElementSibling);
    }
  }

  private removeHighlight() {
    const highlightedTr = this.el.querySelector(`.${this.CSS_CLASS}`);

    if (highlightedTr) {
      highlightedTr.classList.remove(this.CSS_CLASS);
    }
  }
}
