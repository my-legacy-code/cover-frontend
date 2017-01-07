import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-problem-form',
  templateUrl: './new-problem-form.component.html',
  styleUrls: ['./new-problem-form.component.sass']
})
export class NewProblemFormComponent implements OnInit {

  school: string = '';
  course: string;
  problemBody: string = '';
  error: string = 'School cannot be empty';

  constructor() { }

  ngOnInit() {
  }

}
