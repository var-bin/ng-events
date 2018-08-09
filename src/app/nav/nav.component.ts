import { Component } from "@angular/core";

@Component({
  selector: "events-nav",
  templateUrl: "./nav.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      .nav__link.is-active {
        color: #fb8c00 !important;
      }
    `
  ]
})
export class NavComponent {}
