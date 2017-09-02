import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {TermValidator} from "../../../../shared/validators/term.validator";
import {CourseNumberValidator} from "../../../../shared/validators/course-number/course-number.validator";

@Component({
  selector: 'app-new-problem-form',
  templateUrl: './new-problem-form.component.html',
  styleUrls: ['./new-problem-form.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class NewProblemFormComponent implements OnInit {

  newProblemForm: FormGroup;
  title: AbstractControl;
  school: AbstractControl;
  courseNumber: AbstractControl;
  term: AbstractControl;
  year: AbstractControl;
  instructor: AbstractControl;
  problemBody: AbstractControl;

  titleError: string;
  schoolError: string;
  courseNumberError: string;
  termError: string;
  yearError: string;
  instructorError: string;
  problemBodyError: string;

  constructor(private formBuilder: FormBuilder) {
    this.initCreateProblemForm();
  }

  private initCreateProblemForm() {
    this.newProblemForm = this.formBuilder.group({
      title: ['', ],
      school: [''],
      courseNumber: ['', CourseNumberValidator.courseNumber],
      term: ['', TermValidator.term],
      year: [''],
      instructor: [''],
      problemBody: ['']
    });

    this.validateNewProblemForm();

    this.newProblemForm.valueChanges.subscribe(value => {
      console.log(this.newProblemForm.valid, value);
      this.validateNewProblemForm();
    })
  }

  private validateNewProblemForm() {
    if(!this.newProblemForm.controls['term'].valid) {
      if(this.newProblemForm.controls['term'].hasError('term'))
        this.termError = 'Example term: 16B';
    } else
      this.termError = null;

    if(!this.newProblemForm.controls['courseNumber'].valid) {
      if(this.newProblemForm.controls['courseNumber'].hasError('courseNumber'))
        this.courseNumberError = 'Example course number: CS1101';
    } else
      this.courseNumberError = null;
  }

  ngOnInit() {
  }

}
