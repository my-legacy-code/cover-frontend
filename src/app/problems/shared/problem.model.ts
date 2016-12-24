import {User} from "../../shared/User";
import {Term} from "../../shared/Term";
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
