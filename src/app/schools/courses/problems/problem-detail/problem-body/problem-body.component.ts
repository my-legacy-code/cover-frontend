import {
  Component, OnInit, Input, ElementRef, ViewEncapsulation, HostListener, ViewChild, Output, EventEmitter
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
  @Output() onAddLink: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('submitLinkPopupComponent') submitLinkPopupComponent;

  editingKeyword: Keyword;
  popupTop: number;
  popupLeft: number;
  selected: boolean;
  loading: boolean = false;
  shadowRoot;
  problemBodyEl: HTMLDivElement;

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
        this.loading = false;
        let node = range.startContainer.parentNode;
        if(!node.attributes.getNamedItem('data-keyword-id')) {
          let start = this.getStart(range);
          this.editingKeyword = {
            start: start,
            length: length,
            selected: true
          };

          this.keywords.push(this.editingKeyword);
          this.keywords = Object.assign([], this.keywords);
          let rect = range.getBoundingClientRect();
          // Setup popup window
          this.updatePopupPosition(rect);
        }
      }
    }
  }

  updatePopupPosition(rect, absolutePosition: boolean = false) {
    let popup = this.submitLinkPopupComponent.el.nativeElement;
    let rectLeft = absolutePosition ? rect.left : rect.left + document.body.scrollLeft,
      rectTop = absolutePosition ? rect.top : rect.top  + document.body.scrollTop;
    this.popupLeft = rectLeft - this.shadowRoot.host.clientLeft + (rect.width - popup.clientWidth) / 2;
    this.popupTop = rectTop - this.shadowRoot.host.clientTop - popup.clientHeight;
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

  submitLink(url: string) {
    this.loading = true;
    this.onAddLink.next({keyword: this.editingKeyword, url: url});
  }

  closePopup() {
    this.selected = false;
    this.deselect();
  }

  cancel() {
    this.submitLinkPopupComponent.clear();
    this.closePopup();
    this.loading = false;
  }

  deselect() {
    this.keywords = this.keywords.filter(keyword=> !keyword.selected);
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeypress(event) {
    switch(event.key) {
      case "Escape":
        this.cancel();
        break;
      case "Enter":
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
      this.loading = false;
      this.editingKeyword = this.keywords.filter((keyword)=>
        keyword.id == element.dataset.keywordId)[0];
      this.deselect();
      this.selected = true;
      this.updatePopupPosition({
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      }, true)
    }
  }
}
