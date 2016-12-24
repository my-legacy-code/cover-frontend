/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
import {FormsModule} from "@angular/forms";
@NgModule({
  imports: [FormsModule],
  declarations: [
    FromNowPipe,
    AvatarPipe
  ],
  exports: [
    FromNowPipe,
    AvatarPipe,
    FormsModule
  ]
})
export class SharedModule {}
