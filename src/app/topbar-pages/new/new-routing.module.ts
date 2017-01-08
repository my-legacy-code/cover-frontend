import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewProblemComponent} from "./new-problem/new-problem.component";
/**
 * Created by harryliu on 1/5/17.
 */
const newRoutes: Routes = [
  {path: 'problem', component: NewProblemComponent}
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
