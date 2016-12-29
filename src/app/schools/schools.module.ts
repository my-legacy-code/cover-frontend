/**
 * Created by harryliu on 12/25/16.
 */
import { NgModule } from '@angular/core';
import {SchoolsRoutingModule} from "./schools-routing.module";
import {SchoolsComponent} from "./schools-list.component";
import {CoursesModule} from "./courses/courses.module";



@NgModule({
  declarations: [
    SchoolsComponent
  ],
  imports: [
    SchoolsRoutingModule,
    CoursesModule
  ],
})
export class SchoolsModule { }
