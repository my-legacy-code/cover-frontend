import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.sass']
})
export class ThumbnailComponent implements OnInit {
  @Input() problem;
  constructor() { }

  ngOnInit() {
  }

}
