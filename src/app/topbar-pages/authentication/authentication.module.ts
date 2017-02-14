import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class AuthenticationModule {

}
