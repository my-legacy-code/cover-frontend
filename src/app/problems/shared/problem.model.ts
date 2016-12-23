import {User} from "../../shared/User";
import {Term} from "../../shared/Term";
import {Keyword} from "../../shared/Keyword";
export class Problem {
  constructor(public id: number,
              public title: string,
              public course: string,
              public author: User,
              public school: string,
              public year: number,
              public term: Term,
              public body: string,
              public description: string,
              public favorite: boolean,
              public dueDate: Date,
              public postedDate: Date,
              public keywords: Keyword[]) {
  }
}
