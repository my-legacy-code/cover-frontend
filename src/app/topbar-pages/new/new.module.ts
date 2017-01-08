/**
 * Created by harryliu on 1/5/17.
 */
import {NgModule} from "@angular/core";
import { NewProblemComponent } from './new-problem/new-problem.component';
import {NewRoutingModule} from "./new-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { NewProblemFormComponent } from './new-problem/new-problem-form/new-problem-form.component';
@NgModule({
  declarations: [NewProblemComponent, NewProblemFormComponent],
  imports: [
    NewRoutingModule,
    SharedModule
  ]
})
export class NewModule {}
