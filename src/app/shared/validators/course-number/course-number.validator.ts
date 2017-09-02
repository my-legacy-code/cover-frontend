import {FormControl} from "@angular/forms";
import {ValidationError} from "../validation-error";

export class CourseNumberValidator {
  static courseNumber(control: FormControl): ValidationError {
    if(!control.value.match(/^[A-Z]{2}[1-5][0-9]{2,3}$/))
      return {courseNumber: true};
  }
}
