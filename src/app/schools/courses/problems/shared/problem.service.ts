import {Injectable} from "@angular/core";
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Http, Response} from "@angular/http";
import {Problem} from "./problem.model";
import {SchoolService} from "../../../shared/school.service";
import {CourseService} from "../../shared/course.service";
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

  constructor(private http: Http, private courseService: CourseService) {
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


    courseService.currentCourseObservable()
      .subscribe((course) => {
        if (course) {
          this.index.next(`${environment.apiEndpoint}/courses/${course.id}/problems`)
        }
      });

    this.show
      .flatMap((requestUrl) => this.http.get(requestUrl))
      .map(this.extractData)
      .subscribe(this.currentProblem);

    this.currentProblemId
      .subscribe((problemId) => {
        if (problemId) {
          this.show.next(`${environment.apiEndpoint}/problems/${problemId}`)
        }
      });
  }

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


