import {Component, OnInit, Input} from '@angular/core';
import {Keyword} from "../../../shared/Keyword";

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.sass']
})
export class KeywordComponent implements OnInit {

  @Input()
  keyword: Keyword;

  constructor() { }

  ngOnInit() {
  }

  getKeywordTitle(): string {
    return this.keyword.content;
  }

}
