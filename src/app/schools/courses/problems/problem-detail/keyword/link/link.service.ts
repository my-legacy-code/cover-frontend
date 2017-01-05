import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Link} from "../../../../../../shared/Link";
import {environment} from "../../../../../../../environments/environment";
import {Http, Response} from "@angular/http";

// interface ILinkOperation extends Function{
//   (links: {string: Link[]}): {string: Link[]};
// }

@Injectable()
export class LinkService {
  // links: Observable<{string: Link[]}>;
  // operations: Subject<ILinkOperation> = new Subject<ILinkOperation>();
  // index: Subject<string> = new Subject<string>();
  constructor(private http: Http) {
  //   this.index
  //     .map((keywordId)=> `${environment.apiEndpoint}/keywords/${keywordId}/links`)
  //     .flatMap(requestUrl=> http.get(requestUrl))
  //     .map(this.extractData)
  //     .map((newLinks)=>
  //       (links)=>)
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getLinksObservable(keywordId: string): Observable<Link[]> {
    let url = `${environment.apiEndpoint}/keywords/${keywordId}/links`;
    return this.http.get(url).map(this.extractData);
  }
}
