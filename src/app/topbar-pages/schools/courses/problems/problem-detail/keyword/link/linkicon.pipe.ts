import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkicon'
})
export class LinkiconPipe implements PipeTransform {

  transform(linkType: string): string {
    return `/assets/img/icons/linktype/${linkType}.svg`;
  }
}
