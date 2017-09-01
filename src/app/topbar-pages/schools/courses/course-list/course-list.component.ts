import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {NavLocation} from "../../../../shared/breadcrumb/nav-location.model";
import {Course} from "../shared/course.model";
import {CourseService} from "../shared/course.service";
import {ActivatedRoute, Params} from "@angular/router";
import {SchoolService} from "../../shared/school.service";
import {School} from "../../shared/school.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class CourseListComponent implements OnInit {
  navLocation: NavLocation[];
  courses: Course[];

  constructor(private schoolService: SchoolService, private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.schoolService
      .currentSchoolObservable()
      .subscribe((school: School) => {
        if (school) {
          this.navLocation = [
            {
              title: school.acronym,
              route: `/schools/${school.id}/courses`
            }
          ]
        }
      });

    this.courseService
      .coursesObservable()
      .subscribe((courses: Course[]) => {
          this.courses = courses;
        }
      );

    this.route.params
      .subscribe((params: Params) =>
        this.schoolService.getSchool(params['schoolId']));
  }

  onCourseSelected(course: Course) {
    this.courseService.setCurrentCourse(course);
  }
}
