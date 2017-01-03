import {
  Component, OnInit, Input, ElementRef, ViewEncapsulation, HostListener
} from '@angular/core';
import {HightlightPipe} from "./highlight.pipe";
import {SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-problem-body',
  templateUrl: './problem-body.component.html',
  styleUrls: ['./problem-body.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemBodyComponent implements OnInit{
  @Input() problem;
  popupTop: number;
  popupLeft: number;
  selected: boolean;
  body: SafeHtml;
  shadowRoot;
  link: string;

  constructor(private el: ElementRef, private highlightPipe: HightlightPipe) {

  }

  ngOnInit() {
    this.selected = false;
    this.updateBody();

    this.shadowRoot = this.el.nativeElement.shadowRoot;
  }

  getLocation() {
    // this.cancel();
    let selection = this.shadowRoot.getSelection();

    // maybe it's always 1
    if(selection.rangeCount) {
      let range = selection.getRangeAt(0);
      let length = range.endOffset - range.startOffset;
      if(length > 0) {
        let start = this.getStart(range);
        let keyword = {
          id: -1,
          start: start,
          length: length,
          selected: true
        };

        this.selected = true;
        this.problem.keywords.push(keyword);
        this.updateBody();
        let rect = range.getBoundingClientRect();
        // Setup popup window
        this.updatePopupPosition(rect);
      }
    }
  }

  updatePopupPosition(rect) {
    let popup = this.shadowRoot.querySelector('#submit-link-popup');
    this.popupLeft = rect.left - this.shadowRoot.host.clientLeft + (rect.width - popup.clientWidth) / 2;
    this.popupTop = rect.top - this.shadowRoot.host.clientTop - popup.clientHeight;
  }

  private getStart(range: Range): number {
    let previousNode = range.startContainer.previousSibling;
    if(previousNode) {
      // Select on new content
      let linkId: number = parseInt(previousNode.attributes.getNamedItem('data-link-id').value);

      let link = this.problem.keywords.filter((keyword)=> keyword.id == linkId)[0];
      return link.start + link.length + range.startOffset;
    }
    return range.startOffset;
  }

  submitLink() {
    this.selected = false;
  }

  updateBody() {
    this.body = this.highlightPipe.transform(this.problem);
  }

  cancel() {
    this.selected = false;
    this.link = '';
    this.deselect();
  }

  deselect() {
    this.problem.keywords = this.problem.keywords.filter(keyword=> !keyword.selected);
    this.updateBody();
  }

  onKeydown(event: KeyboardEvent) {
    switch(event.key) {
      case "Enter":
        this.submitLink();
        break;
      case "Escape":
        this.cancel();
        break;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeypress(event) {
    switch(event.key) {
      case "Escape":
        this.cancel();
        break;
      default:
        if(this.selected) {
          let linkField = this.shadowRoot.querySelector('#link-field');
          linkField.focus();
        }
        break;
    }
  }
}
