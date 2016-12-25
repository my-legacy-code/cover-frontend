import {Component, OnInit, Input} from '@angular/core';
import {Vote} from "../../../../../shared/Vote";

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.sass']
})
export class VotesComponent implements OnInit {
  voted: boolean;
  @Input() upvotes: Vote[];
  @Input() downvotes: Vote[];

  constructor() { }

  ngOnInit() {
    console.log(this.upvotes)
    console.log(this.downvotes)
  }

}
