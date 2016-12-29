import {Component, OnInit, Input} from '@angular/core';
import {Link} from "../../../../../../shared/Link";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass']
})
export class LinkComponent implements OnInit {

  @Input()
  link: Link;

  constructor() { }

  ngOnInit() {
    console.log(this.link)
  }

}
