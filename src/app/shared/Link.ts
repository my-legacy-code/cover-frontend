import {LinkType} from "./LinkType";
import {User} from "./User";
/**
 * Created by harryliu on 12/14/16.
 */
export interface Link {
  id: number,
  link: string,
  type: LinkType,
  title: string,
  contributor: User,
  upvotes: number,
  downvotes: number,
  voted: boolean
}
