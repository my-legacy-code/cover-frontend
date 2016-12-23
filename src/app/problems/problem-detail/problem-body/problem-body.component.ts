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

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.getLocation();
  }

  getLocation() {
    let selection = document.getSelection();
    if(selection.rangeCount) {
      let range = selection.getRangeAt(0);
      this.container = range.startContainer;
      this.startOffset = range.startOffset;
      this.endOffset = range.endOffset;
      if(range.endOffset - range.startOffset > 0) {
        this.editing = true;
        let rect = range.getBoundingClientRect();
        this.highlight();
        // Setup popup window
        let popup = this.el.nativeElement.querySelector('#submit-link-popup');
        this.popupLeft = rect.left + (rect.width - popup.clientWidth) / 2 + window.pageXOffset;
        this.popupTop = rect.top - popup.clientHeight + window.pageYOffset;

        let linkField = this.el.nativeElement.querySelector('#link-field');
        linkField.focus();
      }
    }
  }

  private highlight() {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('hilitecolor', false, "rgba(185,219,250,1)");
  }

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
}
