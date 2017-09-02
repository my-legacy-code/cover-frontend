import {FormControl} from "@angular/forms";

export class TermValidator {
  static term(control: FormControl): { [s: string]: boolean } {
    if(!control.value.match(/^[0-9]{2}[A-F]$/))
      return {term: true};
  }
}
