import {Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-submit-link-popup',
  templateUrl: './submit-link-popup.component.html',
  styleUrls: ['./submit-link-popup.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class SubmitLinkPopupComponent implements OnInit {

  url: string;
  @Input() loading: boolean;
  @Output() onSubmitLink: EventEmitter<string> = new EventEmitter<string>();
  @Output() onCancel: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  onKeyDown(event: KeyboardEvent) {

    switch(event.key) {
      case "Enter":
        this.onSubmitLink.emit(this.url);
        break;
      case "Escape":
        this.onCancel.emit();
        break;
    }
  }

  clear() {
    this.url = '';
  }
}
