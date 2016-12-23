import {Link} from "./Link";
/**
 * Created by harryliu on 12/14/16.
 */
export interface Keyword {
  id: number;
  start: number;
  length: number;
  bestLinkId: Link;
  links: Link[];
}
