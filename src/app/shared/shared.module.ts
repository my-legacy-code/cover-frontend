/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./topbar/topbar.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TagsComponent } from './tags/tags.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CircularLoaderComponent } from './circular-spinner/circular-spinner.component';
import { SubmitLinkPopupComponent } from './submit-link-popup/submit-link-popup.component';
@NgModule({
  imports: [FormsModule, RouterModule, CommonModule],
  declarations: [
    FromNowPipe,
    AvatarPipe,
    NavComponent,
    BreadcrumbComponent,
    TagsComponent,
    ThumbnailComponent,
    CircularLoaderComponent,
    SubmitLinkPopupComponent
  ],
  exports: [
    CommonModule,
    FromNowPipe,
    AvatarPipe,
    FormsModule,
    NavComponent,
    TagsComponent,
    BreadcrumbComponent,
    ThumbnailComponent,
    CircularLoaderComponent,
    SubmitLinkPopupComponent
  ]
})
export class SharedModule {}
