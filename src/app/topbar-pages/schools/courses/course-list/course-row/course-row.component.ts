import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Course} from "../../shared/course.model";

@Component({
  selector: 'app-course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class CourseRowComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

}
