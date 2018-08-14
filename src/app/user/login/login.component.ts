import { Component } from "@angular/core";

@Component({
  templateUrl: "./login.component.html"
})

export class LoginComponent {
  userName: string;
  userPassword: string;

  onLogin(values) {
    console.log("onLogin: ", values);
  }
}
