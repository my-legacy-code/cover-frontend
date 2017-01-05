import {Injectable} from "@angular/core";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {School} from "./school.model";
import {environment} from "../../../environments/environment";
import {Http, Response} from "@angular/http";

export interface ISchoolOperation extends Function {
  (schools: School[]): School[];
}

const initialSchools: School[] = [];

@Injectable()
export class SchoolService {

  private schools: Observable<School[]>;
  private operations: Subject<ISchoolOperation> = new Subject<ISchoolOperation>();
  private currentSchool: BehaviorSubject<School> = new BehaviorSubject<School>(null);

  private index: Subject<string> = new Subject<string>();

  constructor(private http: Http) {
    this.schools = this.operations
      .scan((schools: School[], operation: ISchoolOperation): School[] =>
        operation(schools), initialSchools);

    this.index
      .map(()=>`${environment.apiEndpoint}/schools`)
      .flatMap((requestUrl) => http.get(requestUrl))
      .map(this.extractData)
      .map((newSchools): ISchoolOperation =>
        (schools: School[]) => newSchools)
      .subscribe(this.operations);
  }

  schoolsObservable(): Observable<School[]> {
    return this.schools;
  }

  getSchools() {
    this.index.next();
  }

  setCurrentSchool(school: School) {
    this.currentSchool.next(school);
  }

  currentSchoolObservable(): Observable<School> {
    return this.currentSchool;
  }

  getSchool(schoolId: string) {
    this.currentSchool.next(
      {
        id: 'c3d04441-8322-42e7-ac84-ec9d329ecd1f',
        acronym: 'WPI',
        name: 'Worcester Polytechnic Institute'
      }
    )
  }

  private extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }
}
