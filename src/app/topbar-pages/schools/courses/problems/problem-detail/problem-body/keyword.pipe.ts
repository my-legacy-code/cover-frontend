import {Pipe, PipeTransform} from "@angular/core";
import {Keyword} from "../../../../../../shared/Keyword";

@Pipe({
  name: "keyword"
})
export class KeywordPipe implements PipeTransform {

  constructor() {

  }

  transform(problemBody: string, keywords: Keyword[]): string {
    keywords.sort((v1: Keyword, v2: Keyword):number => v1.start - v2.start );

    //create an empty list
    let htmlParts:string[] = [];

    //loop
    let lastIndex:number = 0;
    keywords.forEach((keyword: Keyword, index: number) => {
      htmlParts.push(problemBody.substring(lastIndex, keyword.start));
      this.formatKeyword(htmlParts, problemBody.substr(keyword.start, keyword.length), keyword, index);
      lastIndex = keyword.start + keyword.length;
    });
    htmlParts.push(problemBody.substring(lastIndex, problemBody.length));

    return htmlParts.join('');
  }

  formatKeyword(htmlParts, text, keyword, index) {
      htmlParts.push(`<a data-keyword-id="${keyword.id}" href="${keyword.bestLinkUrl}" target="_blank">`);
      htmlParts.push(`${text}[${index + 1}]`);
      htmlParts.push(`</a>`);
  }
}
