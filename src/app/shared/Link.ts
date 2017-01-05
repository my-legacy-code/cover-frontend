import {User} from "./user.model";
/**
 * Created by harryliu on 12/14/16.
 */
export interface Link {
  id: number,
  url: string,
  type: string,
  title: string,
  contributor: User,
  upvotes: number,
  downvotes: number,
  voted: boolean
}
