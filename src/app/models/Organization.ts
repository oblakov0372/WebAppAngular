import { Ad } from './IAd';
import { IUser } from './IUser';
import { User } from './User';

export interface Organization extends IUser {
  Ads: Ad[];
  acceptedUsers: User[];
}
