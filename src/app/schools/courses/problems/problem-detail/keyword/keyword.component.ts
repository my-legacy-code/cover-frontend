import {Component, OnInit, Input} from "@angular/core";
import {Keyword} from "../../../../../shared/Keyword";
import {Link} from "../../../../../shared/Link";
import {Observable} from "rxjs";
import {LinkService} from "./link/link.service";

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.sass']
})
export class KeywordComponent implements OnInit {

  @Input() keyword: Keyword;
  linksStream: Observable<Link[]>;
  links: Link[] = [];

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.linksStream = this.linkService.linksObservable(this.keyword.id);
    this.linksStream
      .subscribe((links) => {
        if(links) this.links = links;
      })
  }

  sortedLinks(): Link[] {
    return this.links.sort((a: Link, b: Link) => this.getScore(b) - this.getScore(a))
  }

  private getScore(link: Link) {
    return ( link.upvotes + link.downvotes ) * ( link.upvotes - link.downvotes )
  }
}
