/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./nav/nav.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
@NgModule({
  imports: [FormsModule, RouterModule, CommonModule],
  declarations: [
    FromNowPipe,
    AvatarPipe,
    NavComponent,
    BreadcrumbComponent
  ],
  exports: [
    FromNowPipe,
    AvatarPipe,
    FormsModule,
    NavComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {}
