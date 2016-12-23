import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
/**
 * Created by harryliu on 12/18/16.
 */
const appRoutes: Routes = [
  // {path: '', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
