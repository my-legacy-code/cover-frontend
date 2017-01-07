import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SchoolService} from "./topbar-pages/schools/shared/school.service";
import {ProblemService} from "./topbar-pages/schools/courses/problems/shared/problem.service";
import {CourseService} from "./topbar-pages/schools/courses/shared/course.service";
import {KeywordService} from "./topbar-pages/schools/courses/problems/problem-detail/keyword/keyword.service";
import {LinkService} from "./topbar-pages/schools/courses/problems/problem-detail/keyword/link/link.service";
import {HomeComponent} from "./home/home.component";
import {TopbarPageModule} from "./topbar-pages/topbar-page.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    TopbarPageModule
  ],
  providers: [
    SchoolService,
    ProblemService,
    CourseService,
    KeywordService,
    LinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
