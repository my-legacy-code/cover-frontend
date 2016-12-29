import { Component, OnInit } from '@angular/core';
import {NavLocation} from "../../../shared/breadcrumb/nav-location.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  navLocation: NavLocation[];

  constructor() {
    this.navLocation = [
      {
        title: 'WPI',
        route: '/schools/0'
      },
      {
        title: 'CS4241',
        route: '/schools/0/courses/0'
      }
    ]
  }

  ngOnInit() {
  }

}
