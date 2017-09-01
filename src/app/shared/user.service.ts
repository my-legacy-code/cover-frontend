/**
 * Created by Administrator on 12/28/2016.
 */
import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {
  getAllUsers(): User[] {
    return undefined;
  }

  signIn(email: string, password: string) {

  }

  signUp(user: User) {

  }

  signOut(user: User) {

  }

  modify(user: User) {

  }

  deleteAccount(user: User) {

  }

  getUser() {

  }
}
