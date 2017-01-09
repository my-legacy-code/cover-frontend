import { Injectable } from '@angular/core';
import { Subject} from "rxjs";

export interface Action {
  name: string,
  task: Function
}

export interface Notification {
  message: string,
  action: Action;
  timing: number;
}

export class NotificationTiming {
  static readonly short: number = 3000;
  static readonly middle: number = 5000;
  static readonly long: number = 8000;
}

@Injectable()
export class NotificationService {
  constructor() { }

  notification: Subject<Notification> = new Subject<Notification>();

  notificationSubject(): Subject<Notification> {
    return this.notification;
  }

  send(notification: Notification){
    this.notification.next(notification);
  };
}
