import { Routes } from "@angular/router";

import { UserProfileComponent } from "./user-profile.component";

const userRoutes: Routes = [
  {
    path: "profile",
    component: UserProfileComponent
  }
];

export { userRoutes };
