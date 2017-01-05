import {
  Component, OnInit, Input, ElementRef, ViewEncapsulation, HostListener
} from '@angular/core';
import {Keyword} from "../../../../../shared/Keyword";

@Component({
  selector: 'app-problem-body',
  templateUrl: './problem-body.component.html',
  styleUrls: ['./problem-body.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemBodyComponent implements OnInit{
  @Input() problemBody: string;
  @Input() keywords: Keyword[];

  popupTop: number;
  popupLeft: number;
  selected: boolean;
  shadowRoot;
  problemBodyEl: HTMLDivElement;
  link: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.selected = false;
    this.shadowRoot = this.el.nativeElement.shadowRoot;
    this.problemBodyEl = this.shadowRoot.querySelector('#problem-body');
  }

  getLocation() {
    // this.cancel();
    let selection = this.shadowRoot.getSelection();

    // maybe it's always 1
    if(selection.rangeCount) {
      let range = selection.getRangeAt(0);
      let length = range.endOffset - range.startOffset;
      if(length > 0 && range.startContainer == range.endContainer) {
        this.selected = true;
        let node = range.startContainer.parentNode;
        if(!node.attributes.getNamedItem('data-keyword-id')) {
          let start = this.getStart(range);
          let keyword: Keyword = {
            start: start,
            length: length,
            selected: true
          };

          this.keywords.push(keyword);
          this.keywords = Object.assign([], this.keywords);
          let rect = range.getBoundingClientRect();
          // Setup popup window
          this.updatePopupPosition(rect);
        }
      } else this.cancel();
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
      let keywordId: string = previousNode.attributes.getNamedItem('data-keyword-id').value;

      let keyword = this.keywords.filter((keyword)=> keyword.id == keywordId)[0];
      return keyword.start + keyword.length + range.startOffset;
    }
    return range.startOffset;
  }

  submitLink() {
    this.selected = false;
  }

  cancel() {
    this.selected = false;
    this.link = '';
    this.deselect();
  }

  deselect() {
    this.keywords = this.keywords.filter(keyword=> !keyword.selected);
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

  onMouseOver(event) {
    let element = event.target;
    if(element.dataset.keywordId) {
      this.deselect();
      this.selected = true;
      this.updatePopupPosition({
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      })
    }
  }
}
