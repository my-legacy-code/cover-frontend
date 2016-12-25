import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {StaticsModule} from "./statics/statics.module";
import {ProblemsModule} from "./problems/problems.module";
import {SharedModule} from "./shared/shared.module";
import { SchoolComponent } from './schools/school.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StaticsModule,
    ProblemsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
