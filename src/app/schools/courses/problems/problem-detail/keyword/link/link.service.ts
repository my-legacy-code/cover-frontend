import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Link} from "../../../../../../shared/Link";
import {environment} from "../../../../../../../environments/environment";
import {Http, Response} from "@angular/http";
import {KeywordService} from "../keyword.service";

interface ILinksOperation extends Function{
  (links: {[keywordId: string]: Link[]}): {[keywordId: string]: Link[]};
}

const initialLinks = {};

@Injectable()
export class LinkService {
  allLinks: Observable<{[keywordId: string]: Link[]}>;
  index: Subject<string> = new Subject<string>();
  operations: Subject<ILinksOperation> = new Subject<ILinksOperation>();
  constructor(private http: Http, private keywordService: KeywordService) {
    this.allLinks = this.operations
      .scan((links: {[keywordId: string]: Link[]}, operation) =>
          operation(links),
        initialLinks);

    this.index
      .flatMap((keywordId)=> {
        let url = `${environment.apiEndpoint}/keywords/${keywordId}/links`;
        return this.http
          .get(url)
          .map(this.extractData)
          .map((links) => ({links, keywordId}))
    })
      .map(({links, keywordId}): ILinksOperation =>
        (oldLinks: {[keywordId: string]: Link[]}) => {
          let keywordLinks = {};
          keywordLinks[keywordId] = links;
          return Object.assign({}, oldLinks, keywordLinks);
        }
      )
      .subscribe(this.operations);


    keywordService
      .keywordsObservable()
      .subscribe((keywords) => {
        keywords.forEach((keyword)=> {
          this.index.next(keyword.id);
        })
      });
  }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  linksObservable(keywordId: string): Observable<Link[]> {
    return this.allLinks.map((allLinks) => allLinks[keywordId]);
  }
}
