import {NgModule} from "@angular/core";
import {TermYearPipe} from "./term-year.pipe";
/**
 * Created by harryliu on 1/3/17.
 */
@NgModule({
  declarations: [
    TermYearPipe
  ],
  exports: [
    TermYearPipe
  ]
})
export class CoursesSharedModule {
}
