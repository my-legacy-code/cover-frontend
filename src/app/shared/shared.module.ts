/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import {FormsModule} from "@angular/forms";
import {NavComponent} from "./nav/nav.component";
@NgModule({
  imports: [FormsModule],
  declarations: [
    FromNowPipe,
    AvatarPipe,
    NavComponent,
  ],
  exports: [
    FromNowPipe,
    AvatarPipe,
    FormsModule,
    NavComponent
  ]
})
export class SharedModule {}
