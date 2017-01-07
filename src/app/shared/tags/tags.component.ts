import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class TagsComponent implements OnInit {

  @Input() tags: string[];

  constructor() { }

  ngOnInit() {
  }

}
