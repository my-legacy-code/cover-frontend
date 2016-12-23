import { Pipe, PipeTransform } from '@angular/core';
import {Md5} from "ts-md5/dist/md5";

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(email: string, size: number = 100): string {
    let e = email.trim().toLowerCase();
    let md5 = new Md5();
    md5.appendStr(e);
    return `https://www.gravatar.com/avatar/${md5.end()}?s=${size}`;
  }
}
