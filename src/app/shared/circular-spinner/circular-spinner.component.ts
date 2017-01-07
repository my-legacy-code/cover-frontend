import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-circular-spinner',
  templateUrl: './circular-spinner.component.html',
  styleUrls: ['./circular-spinner.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class CircularLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
