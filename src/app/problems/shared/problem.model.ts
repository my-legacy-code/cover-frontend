import {User} from "../../shared/user.model";
import {Term} from "../../shared/term.enum";
import {Keyword} from "../../shared/Keyword";
export interface Problem {
  id: number,
  title: string,
  course: string,
  author: User,
  school: string,
  year: number,
  term: Term,
  body: string,
  description: string,
  favorite: boolean,
  dueDate: Date,
  postedDate: Date,
  keywords: Keyword[]
}
