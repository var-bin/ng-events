import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserAuthService } from "../user-auth.service";

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    .profile-error__required,
    .profile-error__pattern,
    .profile-error.profile-error_pattern .profile-error__required {
      display: none;
    }

    .profile-error_pattern .profile-error__pattern {
      display: block;
      float: right;
      color: yellow;
    }

    .profile-error .profile-error__required {
      display: block;
      float: right;
      color: red;
    }

    .profile-error input {
      background-color: antiquewhite;
    }

    .profile-error input::placeholder {
      color: crimson;
    }

    .profile-error-pattern {
      background-color: antiquewhite;
    }
  `]
})

export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  private firstName: FormControl;
  private lastName: FormControl;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(
      this.userAuthService.firstName,
      [
        Validators.required,
        Validators.pattern(/[aA-zZ].*/)
      ]
    );
    this.lastName = new FormControl(
      this.userAuthService.lastName,
      Validators.required
    );

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel(): void {
    this.router.navigate["/events"];
  }

  onSubmit(data): void {
    this.userAuthService.updateCurrentUser(
      data.firstName,
      data.lastName
    );

    this.router.navigate["/events"];
  }

  getErrorCSSClass(controlName: string): boolean {
    if (this[controlName].invalid && this[controlName].touched) {
      return true;
    }
  }

  getPatternErrorCSSClass(controlName: string): boolean {
    if (this[controlName].errors && this[controlName].errors.pattern) {
      return true;
    }
  }
}
