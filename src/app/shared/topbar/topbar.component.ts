import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
