import {Component, OnInit, Input} from '@angular/core';
import {Keyword} from "../../../../../shared/Keyword";
import {Link} from "../../../../../shared/Link";

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.sass']
})
export class KeywordComponent implements OnInit {

  @Input() keyword: Keyword;
  links: Link[] = [];

  constructor() { }

  ngOnInit() {
  }

  getKeywordTitle(): string {
    return this.keyword.content;
  }

}
