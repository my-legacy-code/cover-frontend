/**
 * Created by harryliu on 1/6/17.
 */
import {Directive, EventEmitter, ElementRef, Input} from "@angular/core";
@Directive({
  selector: '[tfInput]',
  host: {
    '[value]': 'value',
    '(input)': 'onValueChange($event.target.value)',
    '(focus)': 'onFocus($event)',
    '(blur)': 'onBlur($event)'
  }
})
export class TFInputDirective {
  value: string;
  valueChange: EventEmitter<string> = new EventEmitter<string>();
  focus: EventEmitter<Event> = new EventEmitter<Event>();
  blur: EventEmitter<Event> = new EventEmitter<Event>();

  constructor(private el: ElementRef) {
  }

  onValueChange(value) {
    this.valueChange.emit(value);
    this.adjustHeight();
  }

  adjustHeight() {
    this.el.nativeElement.style.height = '';
    let scrollHeight = this.el.nativeElement.scrollHeight;
    this.el.nativeElement.style.height = scrollHeight + 'px';
  }

  onFocus(event) {
    this.focus.emit(event);
  }

  onBlur(event) {
    this.blur.emit(event);
  }
}
