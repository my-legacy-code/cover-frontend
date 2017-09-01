/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import {FormsModule} from "@angular/forms";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TagsComponent } from './tags/tags.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CircularLoaderComponent } from './circular-spinner/circular-spinner.component';
import { SubmitLinkPopupComponent } from './submit-link-popup/submit-link-popup.component';
import { CardComponent } from './card/card.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import {TextInputComponent} from "./inputs/text/text.component";
import {AutoResizeDirective} from "./inputs/auto-resize.directive";
@NgModule({
  imports: [FormsModule, RouterModule, CommonModule],
  declarations: [
    FromNowPipe,
    AvatarPipe,
    BreadcrumbComponent,
    TagsComponent,
    ThumbnailComponent,
    CircularLoaderComponent,
    SubmitLinkPopupComponent,
    CardComponent,
    TextInputComponent,
    SnackbarComponent,
    ScrollbarComponent,
    AutoResizeDirective
  ],
  exports: [
    CommonModule,
    FromNowPipe,
    AvatarPipe,
    FormsModule,
    TagsComponent,
    BreadcrumbComponent,
    ThumbnailComponent,
    CircularLoaderComponent,
    SubmitLinkPopupComponent,
    CardComponent,
    TextInputComponent,
    ScrollbarComponent,
    SnackbarComponent,
    AutoResizeDirective
  ]
})
export class SharedModule {}
