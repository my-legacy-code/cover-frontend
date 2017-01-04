/**
 * Created by harryliu on 12/14/16.
 */
export interface User {
  lastName?:string;
  firstName?: string;
  email?: string;
  password?: string;
  school?: string;
  major?: string;
  createdAt?: Date
  id: string;
}
