import {Link} from "./Link";
import {Observable} from "rxjs";
/**
 * Created by harryliu on 12/14/16.
 */

export interface Keyword {
  id?: string;
  start: number;
  length: number;
  selected?: boolean;
  content?: string;
  bestLinkId?: string;
  links?: Observable<Link[]>;
}
