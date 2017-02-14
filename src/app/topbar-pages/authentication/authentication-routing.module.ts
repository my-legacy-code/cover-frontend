import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";

const authenticationRoutes: Routes = [
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthenticationRoutingModule { }
