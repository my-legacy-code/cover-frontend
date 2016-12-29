import {Routes, RouterModule} from "@angular/router";
import {CoursesComponent} from "./courses.component";
import {NgModule} from "@angular/core";
/**
 * Created by harryliu on 12/25/16.
 */
const courseRoutes: Routes = [
  {
    path: 'schools/:school_id/courses',
    component: CoursesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(courseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule {}
