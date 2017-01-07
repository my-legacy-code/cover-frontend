import {Problem} from "../problems/shared/problem.model";
/**
 * Created by harryliu on 1/3/17.
 */

export interface Course {
  id?: string;
  title: string;
  courseNumber: string;
  year: number;
  term: string;
  instructor: string;
  problemCount?: number;
  problems?: Problem[]
}
