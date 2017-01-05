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
    this
      .keyword
      .links
      .subscribe((links)=> {
        this.links = links;
        console.log(links);
      });
  }

  getKeywordTitle(): string {
    return this.keyword.content;
  }

  sortedLinks(): Link[] {
    return this.links.sort((a: Link, b: Link) => this.getScore(b) - this.getScore(a))
  }

  private getScore(link: Link) {
    return ( link.upvotes + link.downvotes ) * ( link.upvotes - link.downvotes )
  }
}
