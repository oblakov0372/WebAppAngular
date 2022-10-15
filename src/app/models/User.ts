import { Ad } from './IAd';
import { IUser } from './IUser';

export interface User extends IUser {
  candidateAds: Ad[];
  likeAds: Ad[];
}
