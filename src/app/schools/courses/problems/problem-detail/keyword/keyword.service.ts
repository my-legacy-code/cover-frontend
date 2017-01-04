import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {Keyword} from "../../../../../shared/Keyword";
import {ProblemService} from "../../shared/problem.service";
import {environment} from "../../../../../../environments/environment";
import {Http, Response} from "@angular/http";

interface IKeywordsOperation extends Function {
  (keywords: Keyword[]): Keyword[];
}

const initialKeywords = [];

@Injectable()
export class KeywordService {

  private keywords: Observable<Keyword[]>;
  private operations: Subject<IKeywordsOperation> = new Subject<IKeywordsOperation>();
  private index: Subject<string> = new Subject<string>();

  constructor(private problemService: ProblemService, private http: Http) {

    this.keywords = this.operations
      .scan((keywords: Keyword[], operation) => operation(keywords),
        initialKeywords);

    this.index
      .flatMap((requestUrl: string) => http.get(requestUrl))
      .map(this.extractData)
      .combineLatest(
        problemService.currentProblemObservable(),
        (newKeywords, problem) =>
          (keywords) =>
            Object.assign([], newKeywords.map((k: Keyword) =>
              Object.assign({}, k, {content: problem.body.substr(k.start, k.length)
          })))
      )
      .subscribe(this.operations);

    problemService
      .currentProblemObservable()
      .subscribe((problem) => {
        if (problem)
          this.index.next(`${environment.apiEndpoint}/problems/${problem.id}/keywords`);
      });

  }

  keywordsObservable(): Observable<Keyword[]> {
    return this.keywords;
  }

  extractData(res: Response): any{
    let body = res.json();
    console.log(body);
    return body || {};
  }
}
