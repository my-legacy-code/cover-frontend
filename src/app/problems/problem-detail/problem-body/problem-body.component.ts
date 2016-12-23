import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {Link} from "../../../shared/Link";
import {Keyword} from "../../../shared/Keyword";

@Component({
  selector: 'app-problem-body',
  templateUrl: './problem-body.component.html',
  styleUrls: ['./problem-body.component.sass']
})
export class ProblemBodyComponent implements OnInit {
  @Input() problem;
  popupTop: number;
  popupLeft: number;
  editing: boolean;
  container;
  startOffset;
  endOffset;
  keywords: Keyword[] = [];

  constructor(private el: ElementRef) {

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
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.getLocation();
  }

  getLocation() {
    let selection = document.getSelection();
    console.log(selection.rangeCount);

    // maybe it's always 1
    if(selection.rangeCount) {
      let range = selection.getRangeAt(0);
      this.container = range.startContainer;
      console.log(this.container);
      this.startOffset = range.startOffset;
      this.endOffset = range.endOffset;
      if(range.endOffset - range.startOffset > 0) {

        //this.problem.keywords.push();

        this.editing = true;
        let rect = range.getBoundingClientRect();
//        this.highlight();
        // Setup popup window
        let popup = this.el.nativeElement.querySelector('#submit-link-popup');
        this.popupLeft = rect.left + (rect.width - popup.clientWidth) / 2 + window.pageXOffset;
        this.popupTop = rect.top - popup.clientHeight + window.pageYOffset;

        let linkField = this.el.nativeElement.querySelector('#link-field');
        linkField.focus();
      }
    }
  }

  // private highlight() {
  //   document.execCommand('styleWithCSS', false, true);
  //   document.execCommand('hilitecolor', false, "rgba(185,219,250,1)");
  // }

  private getKeywords() {
    return this.keywords;
  }

  private  getAbsoluteIndices(container: HTMLElement, index: number): number{
    if (!container.hasAttribute('data-link'))
      return index;

    let sortedKeywords = this.keywords.sort((a: Keyword, b: Keyword): number => a.start - b.start);
  }

  submitLink() {
    this.editing = false;
      // let selection = document.getSelection();
      // selection.removeAllRanges();
      // selection.addRange(range);
      // document.execCommand('hilitecolor', false, "rgba(0,0,0,1)");
  }

  onKeydown(event: KeyboardEvent) {
    switch(event.key) {
      case "Enter":
        console.log(event.key);
        //submitLink();
        break;
      case "Escape":
        console.log(event.key);
        //cancel();
        break;
    }
  }
}
