import {Pipe, PipeTransform} from "@angular/core";
import {Problem} from "../../shared/problem.model";
import {Keyword} from "../../../shared/Keyword";
import {sanitizeHtml} from "@angular/platform-browser/src/security/html_sanitizer";

@Pipe({
  name: "highlight"
})
export class HightlightPipe implements PipeTransform {

  transform(problem: Problem): string {
    //sort
    problem.keywords.sort((v1: Keyword, v2: Keyword):number => v1.start - v2.start );

    console.log(problem.keywords);

    //create an empty list
    let htmlParts:string[] = [];

    //loop
    let lastIndex:number = 0;
    problem.keywords.forEach(function(keyword: Keyword) {
      htmlParts.push(problem.body.substring(lastIndex, keyword.start));
      htmlParts.push('<strong>');
      htmlParts.push(problem.body.substr(keyword.start, keyword.length));
      htmlParts.push('</strong>');
      lastIndex = keyword.start + keyword.length;
    });
    htmlParts.push(problem.body.substring(lastIndex, problem.body.length));

    htmlParts.forEach(function(v) {
      console.log(v);
    });

    return htmlParts.join('');
  }

}
