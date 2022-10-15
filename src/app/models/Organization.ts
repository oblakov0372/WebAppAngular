import { Ad } from './IAd';
import { IUser } from './IUser';

export interface Organization extends IUser {
  Ads: Ad[];
  acceptedUsers: Map<number, number>;
}
