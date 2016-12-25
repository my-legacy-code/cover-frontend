import {Component, OnInit, Input} from '@angular/core';
import {Vote} from "../../../../../shared/Vote";

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.sass']
})
export class VotesComponent implements OnInit {
  voted: boolean;

  @Input()
  upvotes: number;

  @Input()
  downvotes: number;

  constructor() { }

  ngOnInit() {

  }

  onDownvote() {
    this.downvotes++;
  }

  onUpvote() {
    this.upvotes++;
  }
}
