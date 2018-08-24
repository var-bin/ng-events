import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./create-event.component.html",
  styles: [`
    em { display: none; }

    .error em {
      display: block;
      float: right;
      color: red;
    }

    .error input {
      background-color: antiquewhite;
    }

    .error input::placeholder {
      color: crimson;
    }
  `]
})

export class CreateEventComponent {
  isDirty = false;
  newEvent = {};

  constructor(private router: Router) {}

  cancel(): void {
    this.router.navigate(["/events"]);
  }

  saveEvent(formData) {
    console.log(formData);
  }
}
