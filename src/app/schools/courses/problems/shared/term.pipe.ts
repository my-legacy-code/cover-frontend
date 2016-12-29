import { Pipe, PipeTransform } from '@angular/core';
import {Term} from "../../../../shared/term.enum";

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(value: Term): string {
    switch (value) {
      case Term.A:
        return 'A';
      case Term.B:
        return 'B';
      case Term.C:
        return 'C';
      case Term.D:
        return 'D';
      case Term.E:
        return 'E';
      case Term.F:
        return 'F';
    }
  }
}
