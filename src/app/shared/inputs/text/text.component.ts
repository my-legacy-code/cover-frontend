import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class TextInputComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() error: string;
  @Input() multiLine: boolean;
  @Output() valueChange:EventEmitter<string> = new EventEmitter<string>();
  empty: boolean;

  constructor() { }

  ngOnInit() {
    this.empty = true;
  }

  onValueChange(value) {
    this.value = value;
    this.empty = value == '';
    this.valueChange.emit(value);
  }

  hasError(): boolean {
    return this.error != null;
  }
}
