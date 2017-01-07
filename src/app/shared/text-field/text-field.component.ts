import {
  Component, OnInit, Input, Output, EventEmitter, AfterContentInit, ContentChild,
  ViewEncapsulation
} from '@angular/core';
import {TFInputDirective} from "./text-field.directive";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class TextFieldComponent implements OnInit, AfterContentInit {

  @ContentChild(TFInputDirective) input: TFInputDirective;

  @Input() value: string;
  @Input() error: string;
  @Output() valueChange:EventEmitter<string> = new EventEmitter<string>();
  focused: boolean;
  empty: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input.value = this.value;
    this.empty = this.value == '';
    this.input.valueChange.subscribe((value)=>{
      this.onValueChange(value)
    });
    this.input.focus.subscribe((event)=>{
      this.onFocus(event);
    });
    this.input.blur.subscribe((event)=>{
      this.onBlur(event);
    });
  }

  onValueChange(value) {
    this.empty = value == '';
    this.valueChange.emit(value);
  }

  onFocus(event) {
    this.focused = true;
  }

  onBlur(event) {
    this.focused = false;
  }
}
