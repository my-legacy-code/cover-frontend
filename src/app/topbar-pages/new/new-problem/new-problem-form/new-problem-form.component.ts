import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
    this.initCreateProblemForm();
  }

  private initCreateProblemForm() {
    this.newProblemForm = this.formBuilder.group({
      title: '',
      school: '',
      courseNumber: '',
      term: '',
      year: '',
      instructor: '',
      problemBody: ''
    });

    this.title = this.newProblemForm.controls['title'];
    this.school = this.newProblemForm.controls['school'];
    this.courseNumber = this.newProblemForm.controls['courseNumber'];
    this.term = this.newProblemForm.controls['term'];
    this.year = this.newProblemForm.controls['year'];
    this.instructor = this.newProblemForm.controls['instructor'];
    this.problemBody = this.newProblemForm.controls['problemBody'];

    this.newProblemForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit() {
  }

}
