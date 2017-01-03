import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termYear'
})
export class TermYearPipe implements PipeTransform {

  transform(term: string, year: number): string {
    return `${term}${year}`;
  }
}
