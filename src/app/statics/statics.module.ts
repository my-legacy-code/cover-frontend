import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {StaticsRoutingModule} from "./statics-routing.module";

@NgModule({
  imports: [
    CommonModule,
    StaticsRoutingModule
  ],
  declarations: [HomeComponent]
})
export class StaticsModule { }
