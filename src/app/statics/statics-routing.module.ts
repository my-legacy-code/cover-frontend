import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
/**
 * Created by harryliu on 12/18/16.
 */
const staticsRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(staticsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StaticsRoutingModule {}
