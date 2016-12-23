import { Component, OnInit } from '@angular/core';
import {ProblemService} from "../shared/problem.service";
import {Observable} from "rxjs";
import {Problem} from "../shared/problem.model";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.sass']
})
export class ProblemListComponent implements OnInit {

  problems: Observable<Problem[]>;

  constructor(private problemService: ProblemService) {
  }

  ngOnInit() {
    this.problems = this.problemService.problems;
    this.getProblems();
  }

  getProblems() {
    this.problemService
      .getProblems();
  }
}
