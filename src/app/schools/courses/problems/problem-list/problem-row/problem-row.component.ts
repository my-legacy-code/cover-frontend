import {Component, OnInit, Input} from '@angular/core';
import {Problem} from "../../shared/problem.model";

@Component({
  selector: 'app-problem-row',
  templateUrl: './problem-row.component.html',
  styleUrls: ['./problem-row.component.sass']
})
export class ThumbnailComponent implements OnInit {
  @Input() problem: Problem;
  constructor() { }

  ngOnInit() {
  }

}
