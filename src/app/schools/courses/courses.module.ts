import {CoursesComponent} from "./courses.component";
import {NgModule} from "@angular/core";
import {CoursesRoutingModule} from "./courses-routing.module";
import { CourseListComponent } from './course-list/course-list.component';
import {ProblemListComponent} from "./problems/problem-list/problem-list.component";
import {SharedModule} from "../../shared/shared.module";
/**
 * Created by harryliu on 12/25/16.
 */
@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    CoursesRoutingModule,
    SharedModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CoursesModule { }
