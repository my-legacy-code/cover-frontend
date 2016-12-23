import {Component, Input, OnInit} from '@angular/core';
import {Problem} from "../../shared/problem.model";

@Component({
  selector: 'app-problem-detail-breadcrumb',
  templateUrl: './problem-detail-breadcrumb.component.html',
  styleUrls: ['./problem-detail-breadcrumb.component.sass']
})
export class ProblemDetailBreadcrumbComponent{
  @Input() problem: Problem;
}
