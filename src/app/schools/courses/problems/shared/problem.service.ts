import {Injectable} from "@angular/core";
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Http, Response} from "@angular/http";
import {Problem} from "./problem.model";
import {SchoolService} from "../../../shared/school.service";
import {CourseService} from "../../shared/course.service";
import {School} from "../../../shared/school.model";
import {Course} from "../../shared/course.model";
import {Keyword} from "../../../../shared/Keyword";

export interface IProblemsOperation extends Function {
  (problems: Problem[]): Problem[];
}

const initialProblems: Problem[] = [];

@Injectable()
export class ProblemService {

  private problems: Observable<Problem[]>;
  private currentProblem: BehaviorSubject<Problem> = new BehaviorSubject<Problem>(null);
  private currentProblemId: Subject<string> = new BehaviorSubject<string>(null);
  private operations: Subject<IProblemsOperation> = new Subject<IProblemsOperation>();

  private index: Subject<string> = new Subject<string>();
  private show: Subject<string> = new Subject<string>();

  constructor(private http: Http, private schoolService: SchoolService, private courseService: CourseService) {
    this.problems = this.operations
      .scan((problems: Problem[], operation: IProblemsOperation): Problem[] =>
        operation(problems), initialProblems)
      .publishReplay(1)
      .refCount();

    this.index
      .flatMap((requestUrl) => this.http.get(requestUrl))
      .map(this.extractData)
      .map((newProblems): IProblemsOperation =>
        (problems: Problem[]) => newProblems)
      .subscribe(this.operations);


    schoolService
      .currentSchoolObservable()
      .combineLatest(
        courseService.currentCourseObservable(),
        (school: School, course: Course) => ({school, course})
      )
      .subscribe((schoolCourse) => {
        if (schoolCourse.school && schoolCourse.course) {
          this.index.next(`${environment.apiEndpoint}/schools/${schoolCourse.school.id}/courses/${schoolCourse.course.id}/problems`)
        }
      });

    this.show
      .flatMap((requestUrl) => this.http.get(requestUrl))
      .map(this.extractData)
      .map((p) => p.keywords ?
        Object.assign({}, p, {
          keywords: p.keywords.map((k: Keyword) => Object.assign({}, k, {
            content: p.body.substr(k.start, k.length)
          }))
        }) : Object.assign({}, p, {keywords: []}))
      .subscribe(this.currentProblem);

    schoolService
      .currentSchoolObservable()
      .combineLatest(
        courseService.currentCourseObservable(),
        this.currentProblemId,
        (school: School, course: Course, problemId: string) =>
          ({school, course, problemId})
      )
      .subscribe((value) => {
        if (value.school && value.course && value.problemId) {
          this.show.next(`${environment.apiEndpoint}/schools/${value.school.id}/courses/${value.course.id}/problems/${value.problemId}`)
        }
      });
  }

  // getProblem(schoolId: string, courseId: string, problemId: string) {
  //   let problemUrl = `${environment.apiEndpoint}/schools/${schoolId}/courses/${courseId}/problems/${problemId}`;
  //   this.show.next(problemUrl);
  // }

  // getProblems(schoolId: string, courseId: string) {
  //   this.index.next(`${environment.apiEndpoint}/schools/${schoolId}/courses/${courseId}/problems`);
  // }

  problemsObservable(): Observable<Problem[]> {
    return this.problems;
  }

  currentProblemObservable(): Observable<Problem> {
    return this.currentProblem;
  }

  setCurrentProblem(problem: Problem) {
    this.currentProblemId.next(problem.id);
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}


