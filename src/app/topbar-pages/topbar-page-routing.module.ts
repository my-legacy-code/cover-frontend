/**
 * Created by harryliu on 1/5/17.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TopbarPageComponent} from "./topbar-page.component";

const topbarPageRoutes: Routes = [
  {path: '',  component: TopbarPageComponent, children: [
    {path: 'schools', loadChildren: 'app/topbar-pages/schools/schools.module#SchoolsModule'},
    {path: 'new', loadChildren: 'app/topbar-pages/new/new.module#NewModule'},
    {path: '', loadChildren: 'app/topbar-pages/authentication/authentication.module#AuthenticationModule'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(topbarPageRoutes)],
  exports: [RouterModule]
})
export class TopbarPageRoutingModule {}
