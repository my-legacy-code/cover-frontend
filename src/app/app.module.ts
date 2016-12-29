import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {StaticsModule} from "./statics/statics.module";
import {ProblemsModule} from "./problems/problems.module";
import {SharedModule} from "./shared/shared.module";
import {SchoolsModule} from "./schools/schools.module";
import {CoursesModule} from "./courses/courses.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    StaticsModule,
    ProblemsModule,
    SchoolsModule,
    CoursesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
