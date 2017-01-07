import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ProblemService} from "../shared/problem.service";
import {Problem} from "../shared/problem.model";
import {ActivatedRoute, Params} from "@angular/router";
import {SchoolService} from "../../../shared/school.service";
import {CourseService} from "../../shared/course.service";
import {NavLocation} from "../../../../../shared/breadcrumb/nav-location.model";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];
  navLocation: NavLocation[];

  constructor(private schoolService: SchoolService,
              private courseService: CourseService,
              private problemService: ProblemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.problemService.problemsObservable().subscribe(
      (problems) => this.problems = problems
    );
    this.schoolService
      .currentSchoolObservable()
      .combineLatest(
        this.courseService.currentCourseObservable(),
        (school, course) => ({school, course}))
      .subscribe((schoolCourse) => {
        if (schoolCourse.school != null && schoolCourse.course != null) {
          this.navLocation = [
            {
              title: schoolCourse.school.acronym,
              route: `/schools/${schoolCourse.school.id}/courses`
            },
            {
              title: schoolCourse.course.title,
              route: `/schools/${schoolCourse.school.id}/courses/${schoolCourse.course.id}/problems`
            }
          ]
        }
      });

    this.route.params
    .subscribe((params: Params) => {
      this.schoolService.getSchool(params['schoolId']);
      this.courseService.getCourse(params['courseId'])
    });
  }

  setCurrentProblem(problem: Problem) {
    this.problemService.setCurrentProblem(problem);
  }
}
