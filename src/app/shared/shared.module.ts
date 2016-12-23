/**
 * Created by harryliu on 12/19/16.
 */
import {NgModule} from "@angular/core";
import {FromNowPipe} from "./from-now.pipe";
import { AvatarPipe } from './avatar.pipe';
@NgModule({
  declarations: [
    FromNowPipe,
    AvatarPipe
  ],
  exports: [
    FromNowPipe,
    AvatarPipe
  ]
})
export class SharedModule {}
