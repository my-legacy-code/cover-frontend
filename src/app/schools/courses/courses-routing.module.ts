import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by harryliu on 12/25/16.
 */
const courseRoutes: Routes = [
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
