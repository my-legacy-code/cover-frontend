import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {Keyword} from "../../../../../../shared/Keyword";
import {setTimeout} from "timers";
import {KeywordPipe} from "./keyword.pipe";
import set = Reflect.set;

@Component({
  selector: 'app-problem-body',
  templateUrl: './problem-body.component.html',
  styleUrls: ['./problem-body.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemBodyComponent implements OnInit, OnChanges {
  @Input() problemBody: string;
  @Input() keywords: Keyword[];
  @Output() onAddLink: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('submitLinkPopupComponent') submitLinkPopupComponent;

  editingKeyword: Keyword;
  popupTop: number;
  popupLeft: number;
  showPopup: boolean;
  selected: boolean;
  loading: boolean = false;
  shadowRoot;
  problemBodyEl: HTMLDivElement;
  popup: HTMLDivElement;
  appRootEl: Element;

  // highlighter dimensions
  highlighterWidth: number = 0;
  highlighterHeight: number = 0;
  highlighterTop: number = 0;
  highlighterLeft: number = 0;

  constructor(private el: ElementRef, private highlightPipe: KeywordPipe) {

  }

  ngOnInit() {
    this.selected = false;
    this.shadowRoot = this.el.nativeElement.shadowRoot;
    this.problemBodyEl = this.shadowRoot.querySelector('#problem-body');
    this.popup = this.submitLinkPopupComponent.el.nativeElement;
    this.appRootEl = document.body.querySelector('app-root');
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.updateProblemBody();
  }

  updateProblemBody() {
    setTimeout(() => {
      this.problemBodyEl.innerHTML = this.highlightPipe.transform(this.problemBody, this.keywords);
    }, 0);
  }

  selectKeyword(event) {
    let range = this._getRange();
    if (range) {
      if (this._notKeyword(range)) {
        this._showSelection();
        this._showPopup();
        this._hideSpinner();

        let start = this.getStart(range),
          length = range.endOffset - range.startOffset;
        this._setEditingKeyword(start, length);
        let rect = range.getBoundingClientRect();
        // Setup highlighter
        this.updateHighlighterPosition(rect);
        // Setup popup window
        this.updatePopupPosition(rect);
        this._clearRange();
      }
    }
  }

  _setEditingKeyword(start: number, length: number) {
    this.editingKeyword = {
      start: start,
      length: length,
      selected: true
    };
  }

  _notKeyword(range: Range): boolean {
    return !range.startContainer
      .parentNode
      .attributes
      .getNamedItem('data-keyword-id');
  }

  _getRange(): Range {

    let selection = this.shadowRoot.getSelection();
    // maybe it's always 1
    if (selection.rangeCount) {
      let range = selection.getRangeAt(0);
      let length = range.endOffset - range.startOffset;
      if (length > 0 && range.startContainer == range.endContainer)
        return range
    }
    return null;
  }

  _showSelection() {
    this.selected = true;
  }

  _showPopup() {
    this.showPopup = true;
  }

  _hideSpinner() {
    this.loading = false;
  }

  selectionTop(rect): number {
    return rect.top - this.shadowRoot.host.offsetTop + this.appRootEl.scrollTop;
  }

  selectionLeft(rect): number {
    return rect.left - this.shadowRoot.host.offsetLeft + this.appRootEl.scrollLeft
  }

  updateHighlighterPosition(rect) {
    this.highlighterTop = this.selectionTop(rect);
    this.highlighterLeft = this.selectionLeft(rect);
    this.highlighterWidth = rect.width;
    this.highlighterHeight = rect.height;
  }

  updatePopupPosition(rect, relativePosition: boolean = false) {
    let rectLeft = relativePosition ?
        rect.left + this.problemBodyEl.offsetLeft :
        this.selectionLeft(rect),

      rectTop = relativePosition ?
        rect.top + this.problemBodyEl.offsetTop :
        this.selectionTop(rect);

    this.popupLeft = rectLeft + (rect.width - this.popup.clientWidth) / 2;
    this.popupTop = rectTop - this.popup.clientHeight;
  }

  private getStart(range: Range): number {
    let previousNode = range.startContainer.previousSibling;

    if (previousNode) {
      let keywordId: string = previousNode.attributes.getNamedItem('data-keyword-id').value;

      let keyword = this.keywords.filter((keyword) => keyword.id == keywordId)[0];
      return keyword.start + keyword.length + range.startOffset;
    }

    return range.startOffset;
  }

  submitLink(url: string) {
    this.loading = true;
    this.onAddLink.next({keyword: this.editingKeyword, url: url});
  }

  closePopup() {
    this.showPopup = false;
    this.deselect();
  }

  cancel() {
    this.submitLinkPopupComponent.clear();
    this.closePopup();
    this.loading = false;
  }

  deselect() {
    this.selected = false;
    this._clearRange();
  }

  _clearRange() {
    window.getSelection().removeAllRanges()
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.deselect();
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeypress(event) {
    switch (event.key) {
      case "Escape":
        this.cancel();
        break;
      case "Enter":
        break;
      default:
        if (this.showPopup)
          this.submitLinkPopupComponent.focus();

        break;
    }
  }

  onMouseOver(event) {
    let element = event.target;
    if (element.dataset.keywordId) {
      this.loading = false;
      this.editingKeyword = this.keywords.filter((keyword) =>
      keyword.id == element.dataset.keywordId)[0];
      if (this.selected) this.deselect();
      this.showPopup = true;
      this.updatePopupPosition({
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      }, true)
    }
  }
}
