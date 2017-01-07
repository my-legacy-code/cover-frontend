import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CourseListComponent} from "./course-list/course-list.component";
/**
 * Created by harryliu on 12/25/16.
 */
const courseRoutes: Routes = [
  {path: 'courses', children: [
    {path: '', component: CourseListComponent},
    {path: ':courseId', loadChildren: 'app/topbar-pages/schools/courses/problems/problems.module#ProblemsModule'}
  ]}
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
