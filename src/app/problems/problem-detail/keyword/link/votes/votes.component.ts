import {Component, OnInit, Input} from '@angular/core';
import {Vote} from "../../../../../shared/Vote";

enum State {
  upVoted,
  downVoted,
  not
}

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.sass']
})
export class VotesComponent implements OnInit {

  state: number = State.not;

  @Input()
  upvotes: number;

  @Input()
  downvotes: number;

  constructor() { }

  ngOnInit() {

  }

  onDownvote() {
    switch(this.state) {
      case State.upVoted:
        this.upvotes--;
        this.downvotes++;
        this.state = State.downVoted;
        break;

      case State.downVoted:
        this.downvotes--;
        this.state = State.not;
        break;

      case State.not:
        this.downvotes++;
        this.state = State.downVoted;
        break;
    }
  }

  onUpvote() {
    switch(this.state) {
      case State.upVoted:
        this.upvotes--;
        this.state = State.not;
        break;

      case State.downVoted:
        this.downvotes--;
        this.upvotes++;
        this.state = State.upVoted;
        break;

      case State.not:
        this.upvotes++;
        this.state = State.upVoted;
        break;
    }
  }
}
