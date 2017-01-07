import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.sass']
})
export class NewCourseFormComponent implements OnInit {

  school: string;
  courseID: string;
  term: string;
  year: string;
  instructor: string;
  constructor() { }

  ngOnInit() {
    this.school = 'WPI';
    this.courseID = 'CS4241';
    this.term = 'B';
    this.year = '2016';
    this.instructor = 'Prof. Lane Harrison';
  }

}
