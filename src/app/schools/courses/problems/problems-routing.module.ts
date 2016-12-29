import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProblemsComponent} from "./problems.component";
import {ProblemListComponent} from "./problem-list/problem-list.component";
import {ProblemDetailComponent} from "./problem-detail/problem-detail.component";
/**
 * Created by harryliu on 12/18/16.
 */
const problemsRoutes: Routes = [
  {
    path: 'schools/:school_id/courses/:course_id/problems',
    component: ProblemsComponent,
    children: [
      {path: '', component: ProblemListComponent},
      {path: ':id', component: ProblemDetailComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(problemsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProblemsRoutingModule {}
