import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProblemsComponent} from "./problems.component";
import { NavComponent } from '../nav/nav.component';
import {ProblemsRoutingModule} from "./problems-routing.module";
import { ProblemListComponent } from './problem-list/problem-list.component';
import { ThumbnailComponent } from './shared/thumbnail/thumbnail.component';
import {ProblemService} from "./shared/problem.service";
import {HttpModule} from "@angular/http";
import { TermPipe } from './shared/term.pipe';
import {SharedModule} from "../shared/shared.module";
import { ProblemDetailComponent } from './problem-detail/problem-detail.component';
import { ProblemDetailBreadcrumbComponent } from './problem-detail/problem-detail-breadcrumb/problem-detail-breadcrumb.component';
import { ProblemHeaderComponent } from './problem-detail/problem-header/problem-header.component';
import { ProblemBodyComponent } from './problem-detail/problem-body/problem-body.component';
import {HightlightPipe} from "./problem-detail/problem-body/highlight.pipe";
import {KeywordComponent} from './problem-detail/keyword/keyword.component';
import { LinkComponent } from './problem-detail/keyword/link/link.component';
import { VotesComponent } from './problem-detail/keyword/link/votes/votes.component';
import { LinktypePipe } from './problem-detail/keyword/link/linktype.pipe';
import { LinkiconPipe } from './problem-detail/keyword/link/linkicon.pipe';

@NgModule({
  imports: [
    CommonModule,
    // ProblemsRoutingModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    ProblemsComponent,
    NavComponent,
    ProblemListComponent,
    ThumbnailComponent,
    TermPipe,
    ProblemDetailComponent,
    ProblemDetailBreadcrumbComponent,
    ProblemHeaderComponent,
    ProblemBodyComponent,
    KeywordComponent,
    LinkComponent,
    VotesComponent,
    LinktypePipe,
    LinkiconPipe
  ],
  providers: [
    ProblemService,
    {provide: HightlightPipe, useClass: HightlightPipe}
    ]
})
export class ProblemsModule {
}
