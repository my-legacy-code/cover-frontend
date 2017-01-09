import {Component, OnInit, ElementRef, ViewEncapsulation} from "@angular/core";
import {Notification, NotificationService} from "../../core/notification.service";

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  host: {
    '[class.active]':  'active',
    '[style.left]' : 'left'
  },
  styleUrls: ['./snackbar.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class SnackbarComponent implements OnInit {

  notification: Notification;
  active: boolean;
  left: string;

  constructor(private notificationService: NotificationService, private el: ElementRef) {
    this.notificationService
      .notificationSubject()
      .subscribe((notification: Notification) => {
        this.notification = notification;
        setTimeout(()=>{
          this._slideIn();
        });
      })
  }

  ngOnInit() {
    this._slideOut();
  }

  _slideIn() {
    this.active = true;
    let hostWidth: number = this.el.nativeElement.parentNode.host.offsetWidth,
      width: number = this.el.nativeElement.shadowRoot.host.offsetWidth;
    this.left = `${hostWidth - width - 20}px`;
    setTimeout(()=>{
      this._slideOut();
    }, this.notification.timing);
  }

  _slideOut() {
    this.active = false;
    this.left = `100%`;
  }

  performAction() {
    this.notification.action.task();
    this._slideOut();
  }
}
