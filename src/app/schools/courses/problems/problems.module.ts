import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import { ProblemListComponent } from './problem-list/problem-list.component';
import { ThumbnailComponent } from './problem-list/problem-row/problem-row.component';
import {ProblemService} from "./shared/problem.service";
import {HttpModule} from "@angular/http";
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ProblemHeaderComponent } from './problem-detail/problem-header/problem-header.component';
import { ProblemBodyComponent } from './problem-detail/problem-body/problem-body.component';
import {HightlightPipe} from "./problem-detail/problem-body/highlight.pipe";
import {KeywordComponent} from './problem-detail/keyword/keyword.component';
import { LinkComponent } from './problem-detail/keyword/link/link.component';
import { VotesComponent } from './problem-detail/keyword/link/votes/votes.component';
import { LinktypePipe } from './problem-detail/keyword/link/linktype.pipe';
import { LinkiconPipe } from './problem-detail/keyword/link/linkicon.pipe';
import {SharedModule} from "../../../shared/shared.module";
import {CoursesSharedModule} from "../shared/shared.module";
import {ProblemsRoutingModule} from "./problems-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    CoursesSharedModule,
    ProblemsRoutingModule
  ],
  declarations: [
    ProblemListComponent,
    ThumbnailComponent,
    ProblemDetailComponent,
    ProblemHeaderComponent,
    ProblemBodyComponent,
    KeywordComponent,
    LinkComponent,
    VotesComponent,
    LinktypePipe,
    LinkiconPipe
  ],
  providers: [
    {provide: HightlightPipe, useClass: HightlightPipe}
    ],
  exports: [
    ProblemListComponent
  ]
})
export class ProblemsModule {
}
