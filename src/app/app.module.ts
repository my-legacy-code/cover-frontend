import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {StaticsModule} from "./statics/statics.module";
import {ProblemsModule} from "./schools/courses/problems/problems.module";
import {SharedModule} from "./shared/shared.module";
import {SchoolsModule} from "./schools/schools.module";
import {CoursesModule} from "./schools/courses/courses.module";
import {SchoolService} from "./schools/shared/school.service";
import {ProblemService} from "./schools/courses/problems/shared/problem.service";
import {CourseService} from "./schools/courses/shared/course.service";



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
    SchoolService,
    ProblemService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
