/**
 * Created by harryliu on 12/25/16.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
/**
 * Created by harryliu on 12/18/16.
 */
const schoolRoutes: Routes = [
    {path: ':schoolId', loadChildren: 'app/topbar-pages/schools/courses/courses.module#CoursesModule'}
];

@NgModule({
  imports: [
    RouterModule.forChild(schoolRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SchoolsRoutingModule {
}
