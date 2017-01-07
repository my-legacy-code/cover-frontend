import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewProblemComponent} from "./new-problem/new-problem.component";
import {NewCourseComponent} from "./new-course/new-course.component";
/**
 * Created by harryliu on 1/5/17.
 */
const newRoutes: Routes = [
  {path: 'problem', component: NewProblemComponent},
  {path: 'course', component: NewCourseComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(newRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewRoutingModule {

}
