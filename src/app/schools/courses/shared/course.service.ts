import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {Course} from "./course.model";
import {Http, Response} from "@angular/http";
import {SchoolService} from "../../shared/school.service";

export interface ICoursesOperation extends Function {
  (courses: Course[]): Course[];
}

const initialCourses: Course[] = [];

@Injectable()
export class CourseService {

  private courses: Observable<Course[]>;
  private operations: Subject<ICoursesOperation> = new Subject<ICoursesOperation>();
  private currentCourse: Subject<Course> = new BehaviorSubject<Course>(null);
  private currentCourseId: Subject<string> = new BehaviorSubject<string>(null);

  private index: Subject<string> = new Subject<string>();
  private show: Subject<string> = new Subject<string>();

  constructor(private http: Http, private schoolService: SchoolService) {
    this.courses = this.operations
      .scan((courses: Course[], operation: ICoursesOperation): Course[] =>
        operation(courses), initialCourses)
      .publishReplay()
      .refCount();

    this.index
      .flatMap((requestUrl) => http.get(requestUrl))
      .map(this.extractData)
      .map((newCourses): ICoursesOperation =>
        (courses: Course[]) => newCourses)
      .subscribe(this.operations);

    this.schoolService
      .currentSchoolObservable()
      .subscribe( (school) => {
        if(school){
          this.index.next(`${environment.apiEndpoint}/schools/${school.id}/courses`)
        }
      });

    this.show
      .flatMap((requestUrl) => http.get(requestUrl))
      .map(this.extractData)
      .subscribe(this.currentCourse);

    this.schoolService
      .currentSchoolObservable()
      .combineLatest(
        this.currentCourseId,
        (school, courseId) => ({school, courseId}))
      .subscribe((schoolCourseId) => {
        if (schoolCourseId.school && schoolCourseId.courseId) {
          this.show.next(`${environment.apiEndpoint}/schools/${schoolCourseId.school.id}/courses/${schoolCourseId.courseId}`)
        }
      });

  }

  coursesObservable(): Observable<Course[]> {
    return this.courses;
  }

  currentCourseObservable(): Observable<Course> {
    return this.currentCourse;
  }

  setCurrentCourse(course: Course) {
    this.currentCourse.next(course);
  }

  getCourse(courseId: string) {
    this.currentCourseId.next(courseId);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
