import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UserProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

import { userRoutes } from "./user.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserProfileComponent,
    LoginComponent
  ],
  providers: []
})

export class UserModule {}
