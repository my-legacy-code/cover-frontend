import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Problem} from "../../shared/problem.model";

@Component({
  selector: 'app-problem-row',
  templateUrl: './problem-row.component.html',
  styleUrls: ['./problem-row.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ThumbnailComponent implements OnInit {
  @Input() problem: Problem;
  constructor() { }

  ngOnInit() {
  }

}
