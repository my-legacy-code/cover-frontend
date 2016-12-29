import {Component, Input} from '@angular/core';
import {Problem} from "../../shared/problem.model";

@Component({
  selector: 'app-problem-header',
  templateUrl: './problem-header.component.html',
  styleUrls: ['./problem-header.component.sass']
})
export class ProblemHeaderComponent{
  @Input() problem: Problem;
  constructor() { }

}
