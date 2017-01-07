import {NgModule} from "@angular/core";
import {TopbarPageComponent} from "./topbar-page.component";
import {TopbarPageRoutingModule} from "./topbar-page-routing.module";
import {ProblemsModule} from "./schools/courses/problems/problems.module";
import {CoursesModule} from "./schools/courses/courses.module";
import {SchoolsModule} from "./schools/schools.module";
import {NewModule} from "./new/new.module";
import {TopbarComponent} from "./topbar/topbar.component";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by harryliu on 1/5/17.
 */
@NgModule({
  declarations: [
    TopbarPageComponent,
    TopbarComponent
  ],
  imports: [
    TopbarPageRoutingModule,
    ProblemsModule,
    CoursesModule,
    SchoolsModule,
    NewModule,
    SharedModule
  ]
})
export class TopbarPageModule {}
