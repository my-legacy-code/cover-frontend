import {
  Component, OnInit, Input, HostListener, ElementRef, ChangeDetectorRef, ViewEncapsulation,
  AfterContentChecked
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
  editing: boolean;
  body: SafeHtml;
  shadowRoot;

  constructor(private el: ElementRef, private changeDetector: ChangeDetectorRef, private highlightPipe: HightlightPipe) {

  }

  ngOnInit() {
    // test only
    this.problem.keywords.push({
      id: 1,
      start: 43,
      length: 9
      // bestLinkId: 0,
      // links: [],
    });
    this.problem.keywords.push({
      id: 3,
      start: 70,
      length: 20
      // bestLinkId: 0,
      // links: [],
    });
    this.problem.keywords.push({
      id: 2,
      start: 60,
      length: 4
      // bestLinkId: 0,
      // links: [],
    });

    this.updateBody();


    this.shadowRoot = this.el.nativeElement.shadowRoot;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.getLocation();
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

        this.editing = true;
        this.problem.keywords.push(keyword);
        this.updateBody();
        let rect = range.getBoundingClientRect();
        // Setup popup window
        this.updatePopupPosition(rect);
        let linkField = this.shadowRoot.querySelector('#link-field');
        console.log('before focus');
        linkField.focus();
        console.log('after focus');
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

  // private highlight() {
  //   document.execCommand('styleWithCSS', false, true);
  //   document.execCommand('hilitecolor', false, "rgba(185,219,250,1)");
  // }

  submitLink() {
    this.editing = false;
      // let selection = document.getSelection();
      // selection.removeAllRanges();
      // selection.addRange(range);
      // document.execCommand('hilitecolor', false, "rgba(0,0,0,1)");
  }

  updateBody() {
    this.body = this.highlightPipe.transform(this.problem);
  }

  cancel() {
    this.editing = false;
    this.problem.keywords = this.problem.keywords.filter(keyword=> !keyword.selected);
    this.updateBody();
  }

  onKeydown(event: KeyboardEvent) {
    switch(event.key) {
      case "Enter":
        console.log(event.key);
        //submitLink();
        break;
      case "Escape":
        console.log(event.key);
        this.cancel();
        break;
    }
  }
}
