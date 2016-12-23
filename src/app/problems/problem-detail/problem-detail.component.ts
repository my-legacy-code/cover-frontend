import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Params, ActivatedRoute} from "@angular/router";
import {ProblemService} from "../shared/problem.service";
import {Observable, Subject} from "rxjs";
import {Problem} from "../shared/problem.model";

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.sass']
})
export class ProblemDetailComponent implements OnInit {

  problem: Problem;
  constructor(private problemService: ProblemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.problemService
      .currentProblem
      .subscribe((problem)=>this.problem = problem);

    this.route
      .params
      .subscribe((params: Params)=> this.problemService.setCurrentProblem(+params['id']))
  }
}
