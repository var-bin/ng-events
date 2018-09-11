import { Component } from "@angular/core";

@Component({
  selector: "session-list-table",
  templateUrl: "./session-list-table.component.html",
  styles: [`
    .is-selected {
      outline: 2px dashed #000;
    }

    table:focus {
      outline: 0;
    }
  `]
})

export class SessionListTableComponent {}
