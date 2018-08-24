import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserAuthService } from "../user-auth.service";

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    em { display: none; }

    .profile-error em {
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
      Validators.required
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
    this.router.navigate["events"];
  }

  onSubmit(data): void {
    this.userAuthService.updateCurrentUser(
      data.firstName,
      data.lastName
    );

    this.router.navigate["events"];
  }

  getErrorCSSClass(controlName: string): string {
    const ERROR_CSS_CLASS = "profile-error";

    if (this[controlName].invalid && this[controlName].touched) {
      return ERROR_CSS_CLASS;
    }
  }
}
