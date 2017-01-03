import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {

  @Input() tags: string[];

  constructor() { }

  ngOnInit() {
  }

}
