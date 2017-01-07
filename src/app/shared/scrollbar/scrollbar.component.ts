import {Component, OnInit, HostListener, ElementRef, ViewEncapsulation, AfterViewChecked} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.sass'],
  host: {
    '[class.show]': 'isShow()'
  },
  encapsulation: ViewEncapsulation.Native
})
export class ScrollbarComponent implements OnInit, AfterViewChecked {

  scrollTop: number = 0;
  scrollHeight: number = 0;
  clientHeight: number = 0;

  constructor(private el: ElementRef, private router: Router) {
  }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd)
        this.adjustTracker();
    });
  }


  ngAfterViewChecked(): void {
    setTimeout(()=>{
      this.adjustTracker();
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.adjustTracker();
  }

  adjustTracker() {
    this.scrollTop = this.el.nativeElement.parentNode.host.scrollTop;
    this.scrollHeight = this.el.nativeElement.parentNode.host.scrollHeight;
    this.clientHeight = this.el.nativeElement.parentNode.host.clientHeight;
  }

  @HostListener('window:mousewheel', ['$event'])
  onMouseWheel(event) {
    this.scrollTop = Math.min(Math.max(0, this.scrollTop - event.wheelDeltaY), this.scrollHeight - this.clientHeight);
    this.el.nativeElement.parentNode.host.scrollTop = this.scrollTop;
  }

  trackHeightPercentage(): number {
    return this.clientHeight / this.scrollHeight * 100.0;
  }

  scrollTopPercentage(): number {
    return this.scrollTop / this.scrollHeight * 100.0;
  }

  isShow(): boolean {
    return this.scrollHeight != this.clientHeight;
  }
}
