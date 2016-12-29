import {Pipe, PipeTransform} from "@angular/core";
import {Problem} from "../../shared/problem.model";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Keyword} from "../../../../../shared/Keyword";

@Pipe({
  name: "highlight"
})
export class HightlightPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(problem: Problem): SafeHtml {
    console.log("Pipe");
    //sort
    problem.keywords.sort((v1: Keyword, v2: Keyword):number => v1.start - v2.start );

    //create an empty list
    let htmlParts:string[] = [];

    //loop
    let lastIndex:number = 0;
    problem.keywords.forEach((keyword: Keyword, index: number) => {
      htmlParts.push(problem.body.substring(lastIndex, keyword.start));
      // htmlParts.push(`<a data-link-id="${keyword.id}">`);
      // htmlParts.push(`${problem.body.substr(keyword.start, keyword.length)}[${index + 1}]`);
      // htmlParts.push(`</a>`);
      this.formatKeyword(htmlParts, problem.body.substr(keyword.start, keyword.length), keyword, index);
      // this.
      lastIndex = keyword.start + keyword.length;
    });
    htmlParts.push(problem.body.substring(lastIndex, problem.body.length));

    // htmlParts.forEach(function(v) {
    //   console.log(v);
    // });

    return this.domSanitizer.bypassSecurityTrustHtml(htmlParts.join(''));
  }

  formatKeyword(htmlParts, text, keyword, index) {
    if (!keyword.selected) {
      htmlParts.push(`<a data-link-id="${keyword.id}">`);
      htmlParts.push(`${text}[${index + 1}]`);
      htmlParts.push(`</a>`);
    } else {
      htmlParts.push(`<span class="selected">`);
      htmlParts.push(text);
      htmlParts.push(`</span>`);
    }
  }
}
