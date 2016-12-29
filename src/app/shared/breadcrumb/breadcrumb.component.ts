import {Component, Input} from '@angular/core';
// import {Problem} from "../../shared/problem.model";
import {NavLocation} from "./nav-location.model";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent{
  // @Input() problem: Problem;
  @Input() navLocations: NavLocation[];
}
