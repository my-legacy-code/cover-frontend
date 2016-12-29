import { Pipe, PipeTransform } from '@angular/core';
import {LinkType} from "../../../../../../shared/LinkType";

@Pipe({
  name: 'linktype'
})
export class LinktypePipe implements PipeTransform {

  transform(linkType: LinkType): string {
    switch (linkType) {
      case LinkType.wiki:
        return 'wiki';
      case LinkType.picture:
        return 'picture';
      case LinkType.location:
        return 'location';
      case LinkType.video:
        return 'video';
      case LinkType.audio:
        return 'audio';
      case LinkType.definition:
        return 'definition';
      case LinkType.codesnippet:
        return 'codesnippet';
      case LinkType.book:
        return 'book';
      case LinkType.store:
        return 'store';
      case LinkType.site:
        return 'site';
    }
  }

}
