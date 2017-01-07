import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProblemListComponent} from "./problem-list/problem-list.component";
import {ProblemDetailComponent} from "./problem-detail/problem-detail.component";
/**
 * Created by harryliu on 12/18/16.
 */
const problemsRoutes: Routes = [
  {
    path: 'problems',
    children: [
      {path: '', component: ProblemListComponent},
      {path: ':problemId', component: ProblemDetailComponent}
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
