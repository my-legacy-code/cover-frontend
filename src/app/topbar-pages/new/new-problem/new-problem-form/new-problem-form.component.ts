import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TermValidator} from "../../../../shared/validators/term.validator";

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
      courseNumber: [''],
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
        this.termError = 'Example Term: 16B';
    } else
      this.termError = null;
  }

  ngOnInit() {
  }

}
