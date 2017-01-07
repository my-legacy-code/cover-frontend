import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
