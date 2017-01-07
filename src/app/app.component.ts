import {Component, ViewEncapsulation, OnInit, HostListener, ElementRef, AfterViewInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements AfterViewInit{


  constructor() {
  }

  ngAfterViewInit(): void {
  }
}
