/**
 * Created by harryliu on 1/6/17.
 */
import {Directive, ElementRef} from "@angular/core";
@Directive({
  selector: 'textarea[autoResize]',
  host: {
    '(input)': 'onValueChange($event.target.value)'
  }
})
export class AutoResizeDirective {

  constructor(private el: ElementRef) {
  }

  onValueChange(value) {
    this.adjustHeight();
  }

  adjustHeight() {
    this.el.nativeElement.style.height = '';
    let scrollHeight = this.el.nativeElement.scrollHeight;
    this.el.nativeElement.style.height = scrollHeight + 'px';
  }
}
