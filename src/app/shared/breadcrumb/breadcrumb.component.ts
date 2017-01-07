import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NavLocation} from "./nav-location.model";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class BreadcrumbComponent{
  @Input() navLocations: NavLocation[];
}
