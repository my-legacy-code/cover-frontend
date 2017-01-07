import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {ProblemService} from "../shared/problem.service";
import {Problem} from "../shared/problem.model";
import {Keyword} from "../../../../../shared/Keyword";
import {CourseService} from "../../shared/course.service";
import {TermYearPipe} from "../../shared/term-year.pipe";
import {NavLocation} from "../../../../../shared/breadcrumb/nav-location.model";
import {SchoolService} from "../../../shared/school.service";
import {KeywordService} from "./keyword/keyword.service";

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemDetailComponent implements OnInit {

  keywords: Keyword[] = [];
  problem: Problem;
  tags: string[];
  navLocations: NavLocation[];

  @ViewChild('problemBodyComponent') problemBodyComponent;

  // switched order
  constructor(private route: ActivatedRoute,
              private schoolService: SchoolService,
              private problemService: ProblemService,
              private courseService: CourseService,
              private keywordService: KeywordService) {
  }

  ngOnInit() {
    this.problemService
      .currentProblemObservable()
      .subscribe((problem) => this.problem = problem);


    this.schoolService
      .currentSchoolObservable()
      .combineLatest(
        this.courseService.currentCourseObservable(),
        this.problemService.currentProblemObservable(),
        (school, course, problem) => ({school, course, problem}))
      .subscribe((value) => {
        if (value.school && value.course && value.problem) {
          this.navLocations = [
            {
              title: value.school.acronym,
              route: `/schools/${value.school.id}/courses`
            },
            {
              title: value.course.title,
              route: `/schools/${value.school.id}/courses/${value.course.id}/problems`
            },
            {
              title: value.problem.title,
              route: `/schools/${value.school.id}/courses/${value.course.id}/problems/${value.problem.id}`
            }
          ]
        }
      });

    this.courseService
      .currentCourseObservable()
      .subscribe((course) => {
        if (course) {
          this.tags = [
            course.courseNumber,
            new TermYearPipe().transform(course.term, course.year),
            course.instructor]
        }
      });


    this.route.params
      .subscribe((params: Params) => {
        this.schoolService.getSchool(params['schoolId']);
        this.courseService.getCourse(params['courseId']);
        this.problemService.setCurrentProblem({id: params['problemId']});
      });

    this.keywordService
      .keywordsObservable()
      .subscribe((keywords) => {
        this.keywords = keywords;
      });

  }

  getValidKeywords(): Keyword[] {
    return this.keywords.filter((keyword) => keyword.id);
  }

  addLink(data) {
    let keyword: Keyword = data.keyword,
      url: string = data.url;
    console.log(keyword, url);
  }
}
