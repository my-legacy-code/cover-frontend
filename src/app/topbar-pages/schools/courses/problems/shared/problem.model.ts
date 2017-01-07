import {User} from "../../../../../shared/user.model";
import {Keyword} from "../../../../../shared/Keyword";
export interface Problem {
  id: string,
  title?: string,
  author?: User,
  body?: string,
  description?: string,
  favorite?: boolean,
  due?: Date,
  createdAt?: Date,
  keywords?: Keyword[]
}
