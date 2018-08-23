import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { UserAuthService } from "../user-auth.service";

@Component({
  templateUrl: "./profile.component.html"
})

export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const firstName = new FormControl(this.userAuthService.firstName);
    const lastName = new FormControl(this.userAuthService.lastName);

    this.profileForm = new FormGroup({
      firstName,
      lastName
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
}
