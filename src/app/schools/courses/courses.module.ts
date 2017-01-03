import {NgModule} from "@angular/core";
import {CoursesRoutingModule} from "./courses-routing.module";
import { CourseListComponent } from './course-list/course-list.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseService} from "./shared/course.service";
import { CourseRowComponent } from './course-row/course-row.component';
import {CoursesSharedModule} from "./shared/shared.module";
import {SchoolService} from "../shared/school.service";
/**
 * Created by harryliu on 12/25/16.
 */
@NgModule({
  declarations: [
    CourseListComponent,
    CourseRowComponent
  ],
  imports: [
    SharedModule,
    CoursesSharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CoursesModule { }
