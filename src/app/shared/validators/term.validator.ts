import {FormControl} from "@angular/forms";
import {ValidationError} from "app/shared/validators/validation-error";

export class TermValidator {
  static term(control: FormControl): ValidationError {
    if(!control.value.match(/^[0-9]{2}[A-F]$/))
      return {term: true};
  }
}
