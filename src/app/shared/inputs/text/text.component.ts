import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, forwardRef
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.Native
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  @Input() title: string;
  @Input() value: string;
  @Input() error: string;
  @Input() multiLine: boolean;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  private propagateChange: Function;
  focused: boolean;
  empty: boolean;

  constructor() {
  }

  ngOnInit() {
    this.empty = true;
  }

  onValueChange(value) {
    this.value = value;
    this.empty = value == '';
    this.valueChange.emit(value);
    this.propagateChange(value);
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }

  hasError(): boolean {
    return this.error != null;
  }


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
